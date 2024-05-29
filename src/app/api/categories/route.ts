import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import Category from '@/models/category';

export const GET = async () => {
  try {
    await connectMongoDB();
    const categories = await Category.find({});
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: `Failed to fetch categories: ${error instanceof Error ? error.message : error}`,
      },
      { status: 500 },
    );
  }
};
