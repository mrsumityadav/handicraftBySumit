import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Category } from '@/models/Category';
import { Product } from '@/models/Product';
import { seedCategories, seedProducts } from '@/data/seedData';

export async function GET() {
  try {
    await connectDB();

    // Seed Categories
    for (const catData of seedCategories) {
      await Category.findOneAndUpdate(
        { slug: catData.slug },
        catData,
        { upsert: true, new: true }
      );
    }

    // Seed Products
    for (const prodData of seedProducts) {
      await Product.findOneAndUpdate(
        { slug: prodData.slug },
        prodData,
        { upsert: true, new: true }
      );
    }

    const categoriesCount = await Category.countDocuments();
    const productsCount = await Product.countDocuments();

    return NextResponse.json({
      success: true,
      message: 'Database successfully seeded!',
      categoriesCount,
      productsCount,
    });
  } catch (error: any) {
    console.error('Error seeding database:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to seed database' },
      { status: 500 }
    );
  }
}
