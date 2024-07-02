import OpenAI from "openai";
import {OPENAI_KEY, opeai_key } from "./constants";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
