import Post from '@/lib/models/Post';
import User from '@/lib/models/User';
import { connectToDB } from '@/lib/mongodb/mongoose';

export async function GET(req, { params }) {

  try {
    await connectToDB()
    const user = await User.findOne({ clerkId: params.id }).populate({
      path: "posts savedPosts likedPosts",
      model: Post,
      populate: {
        path: "creator",
        model: User,
      },
    })
      .populate({
        path: "followers following",
        model: User,
        populate: {
          path: "posts savedPosts likedPosts",
          model: Post,
        },
      }).exec()

    return new Response(JSON.stringify(user), { status: 201 })
  } catch (error) {
    return new Response('Wrong', { status: 402 })
  }

}