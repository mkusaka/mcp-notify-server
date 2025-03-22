#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { logger } from "./lib/logger.js";
import player from "play-sound";

const audio = player();

const server = new McpServer({
  name: "notify",
  version: "1.0.0"
});

server.tool(
  "notify",
  "Play a notification sound",
  {},
  async () => {
    try {
      // macOSのデフォルト通知音を再生
      audio.play("/System/Library/Sounds/Glass.aiff", (err) => {
        if (err) {
          logger.error(`Error playing sound: ${err}`);
        }
      });

      return {
        content: [{ 
          type: "text", 
          text: "Notification sound played" 
        }]
      };
    } catch (error) {
      logger.error(`Error in notify tool: ${error instanceof Error ? error.message : String(error)}`);
      return {
        content: [{ 
          type: "text", 
          text: `Error: ${error instanceof Error ? error.message : String(error)}` 
        }],
        isError: true
      };
    }
  }
);

const transport = new StdioServerTransport();
server.connect(transport).catch((error) => {
  logger.error(`Server connection error: ${error}`);
  process.exit(1);
}); 
