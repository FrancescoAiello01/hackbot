import { Message } from "discord.js";

/**
 * An interface for all commands to extend, representing the API that all
 * subclasses should implement.
 *
 * @class Command
 */
export default interface Command {
  readonly description: string;
  execute(args: string[], msg: Message): void;
}
