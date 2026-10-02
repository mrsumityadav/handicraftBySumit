import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Product } from '@/models/Product';
import { seedProducts } from '@/data/seedData';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const material = searchParams.get('material');
    const featured = searchParams.get('featured');
    const search = searchParams.get('search');

    try {
      await connectDB();
      const query: any = { active: true };

      if (category && category !== 'all') {
        query.category = category;
      }
      if (material && material !== 'all') {
        query.material = { $regex: material, $options: 'i' };
      }
      if (featured === 'true') {
        query.featured = true;
      }
      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { material: { $regex: search, $options: 'i' } },
        ];
      }

      let products = await Product.find(query).sort({ createdAt: -1 }).lean();

      // If DB is empty, automatically seed and fetch again
      if (products.length === 0 && !category && !material && !search) {
        for (const prodData of seedProducts) {
          await Product.findOneAndUpdate(
            { slug: prodData.slug },
            prodData,
            { upsert: true, new: true }
          );
        }
        products = await Product.find({ active: true }).sort({ createdAt: -1 }).lean();
      }

      return NextResponse.json({ success: true, count: products.length, products });
    } catch (dbError) {
      console.warn('MongoDB query warning, using local fallback:', dbError);
      // Fallback filtering on seed dataset
      let filtered = [...seedProducts];
      if (category && category !== 'all') {
        filtered = filtered.filter((p) => p.category === category);
      }
      if (featured === 'true') {
        filtered = filtered.filter((p) => p.featured);
      }
      if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(
          (p) => p.name.toLowerCase().includes(s) || p.material.toLowerCase().includes(s)
        );
      }
      return NextResponse.json({ success: true, count: filtered.length, products: filtered });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
