import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json();
    console.log(userId + " " + prompt + " " + tag)
    try {
        await connectToDB();
        console.log("ok");
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag,
        })
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Fail to create a new prompt", { status: 500 })
    }
}