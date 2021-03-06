import { Client, Message } from "discord.js";

/**
 * An interface for all commands to extend, representing the API that all
 * subclasses should implement.
 *
 * @class Command
 */
export default interface ICommand {
  readonly name: string;
  readonly description: string;
  execute(args: string[], msg: Message, client?: Client): void;
}
