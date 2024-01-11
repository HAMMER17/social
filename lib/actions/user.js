import User from "../model/User";
import { connectToDB } from "../db/mongo";

export const createUser = async (id, first_name,
  last_name, email_addresses, username, image_url) => {
  try {
    await connectToDB()

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          username,
          firstName: first_name,
          lastName: last_name,
          email: email_addresses[0].email_address,
          profilePhoto: image_url,
        }
      }, { upsert: true, new: true },
    )
    await user.save()
    console.log(user, 'User')
    return user;
  } catch (error) {
    console.log(error)
  }
}
export const deleteUser = async (id) => {
  try {
    await connectToDB()
    await User.findOneAndDelete({ clerkId: id })
  } catch (error) {
    console.log(error)
  }
}