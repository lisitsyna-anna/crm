import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import Stat from '@/models/stat';

export const GET = async () => {
  try {
    await connectMongoDB();
    const stats = await Stat.findOne({});
    return NextResponse.json(stats, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: `Failed to fetch summary stats: ${error instanceof Error ? error.message : error}`,
      },
      { status: 500 },
    );
  }
};
