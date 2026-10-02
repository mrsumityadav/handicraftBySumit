import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Product } from '@/models/Product';
import { seedProducts } from '@/data/seedData';

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;

    try {
      await connectDB();
      const product = await Product.findOne({ slug, active: true }).lean();

      if (product) {
        return NextResponse.json({ success: true, product });
      }
    } catch (dbError) {
      console.warn('MongoDB lookup warning:', dbError);
    }

    // Fallback to seedProducts if not found in DB
    const fallbackProduct = seedProducts.find((p) => p.slug === slug);
    if (fallbackProduct) {
      return NextResponse.json({ success: true, product: fallbackProduct });
    }

    return NextResponse.json(
      { success: false, error: 'Product not found' },
      { status: 404 }
    );
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
