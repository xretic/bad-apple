import fs from "fs";
import path from "path";
import { animateFrames } from "../utils/animateFrames";

export default () => {
	const frames: string = fs.readFileSync(
		path.resolve(__dirname, "../../assets/frames.txt"),
		{ encoding: "utf-8" }
	);

	const framesArray: string[] = frames.split(/^\n$/gm);
	const startTime: number = Date.now();

	animateFrames(framesArray.shift()!, 0, startTime, framesArray);
};
