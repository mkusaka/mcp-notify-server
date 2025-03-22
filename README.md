# MCP Notify Server

A MCP server that plays notification sounds when Cursor/Windsurf completes code generation or requires user approval.

## Features

- Uses macOS system notification sounds
- Notifies when code generation is complete
- Notifies when user approval is needed
- Simple and lightweight

## Requirements

- macOS
- Node.js 18 or later

## Installation

```bash
npx -y @mkusaka/mcp-notify-server
```

Or install globally:

```bash
npm install -g @mkusaka/mcp-notify-server
```

## Configuration

Add the following to your Cursor configuration file (`~/.cursor/config.json`):

```json
{
  "mcpServers": {
    "notify": {
      "command": "npx",
      "args": ["-y", "@mkusaka/mcp-notify-server"]
    }
  }
}
```

## Rule Configuration

Add the following to your Cursor rules file:

```
Always Notify by sound using "notify" every time you need user attention
 - when you need user's approval for running the tool
 - when you finish the task
 - DO NOT MAKE MORE THAN ONE SOUND NOTIFICATION.
```

## Development

### Setup

```bash
git clone https://github.com/mkusaka/mcp-notify-server.git
cd mcp-notify-server
npm install
npm run build
```

### Inspection

You can test the MCP server interactively using `mcp-inspector`:

```bash
npm run inspect
```

This allows you to test the server's tools and functionality in an interactive environment.

### Available Scripts

- `npm run build` - Build the project
- `npm run start` - Start the server
- `npm run dev` - Start the development mode with watch
- `npm run inspect` - Start the interactive inspection mode

## Caveats

- Currently supports macOS only
- Sound notifications depend on LLM's judgment, which may result in:
  - Unexpected timing of notifications
  - Occasional missed notifications
  - Potential variations in behavior

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Author

@mkusaka

## References

* [@ks0318-p's article about sound notification MCP](https://zenn.dev/ks0318/articles/ed5127b40d2935)
* [MCP Server Best Practices](https://github.com/mkusaka/mcp-shell-server/blob/main/best_practice.md)
