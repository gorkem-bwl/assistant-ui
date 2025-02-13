import type { ThreadAssistantMessage } from "../../types";

export const shouldContinue = (
  result: ThreadAssistantMessage,
  ignoreToolNames: string[],
) =>
  result.status?.type === "requires-action" &&
  result.status.reason === "tool-calls" &&
  result.content.every(
    (c) =>
      c.type !== "tool-call" ||
      !!c.result ||
      ignoreToolNames.includes(c.toolName),
  );
