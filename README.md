# Node.js Demo Project

A comprehensive Node.js tutorial project demonstrating fundamental concepts and core modules through practical examples.

## What's Included

This project contains hands-on examples covering the following Node.js topics:

1. **Global Variables** - Understanding `__dirname` and `__filename`
2. **Modules** - Working with Node.js module system
3. **OS Module** - Interacting with operating system information
4. **Path Module** - Handling file paths
5. **File System (Sync)** - Synchronous file operations (read/write)
6. **File System (Async)** - Asynchronous file operations with callbacks
7. **HTTP Module** - Creating a basic HTTP server with routing
8. **Async/Await** - Modern asynchronous file operations
9. **Event Emitter** - Creating and handling custom events
10. **HTTP Server with Events** - Building HTTP server using event-driven architecture
11. **Large File Creation** - Generating big files efficiently
12. **Stream Reading** - Reading large files using streams
13. **Chunked Responses** - Serving large files via HTTP with streaming

## Prerequisites

- Node.js (v12 or higher recommended)
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the project

2. Navigate to the project directory:
```bash
cd node-demo
```

3. Install dependencies:
```bash
npm install
```

## Running the Project

### Run Individual Examples

Each numbered file can be run independently:

```bash
# Run any specific example
node 1-globals.js
node 2-module.js
node 3-os-module.js
# ... and so on
```

### Run HTTP Server Examples

For HTTP server demos (files 7, 10, 13), start the server and visit `http://localhost:5000` in your browser:

```bash
# Basic HTTP server
node 7-http-module.js

# HTTP server with event emitters
node 10-create-http-server-with-emit.js

# Streaming large files via HTTP
node 13-write-chunked-response.js
```

### Development Mode

Use nodemon for automatic reloading during development:

```bash
npm start
```

This will run `app.js` with nodemon, which automatically restarts when file changes are detected.

## File Descriptions

| File | Description |
|------|-------------|
| `1-globals.js` | Demonstrates Node.js global variables |
| `2-module.js` | Shows how to work with modules |
| `3-os-module.js` | Examples of OS module usage |
| `4-path-module.js` | Working with file paths |
| `5-fs-module.js` | Synchronous file system operations |
| `6-fs-module-async.js` | Asynchronous file operations with callbacks |
| `7-http-module.js` | Basic HTTP server with routing |
| `8-async-await-file-write.js` | Modern async/await file operations |
| `9-event-on-emit.js` | Custom event creation and handling |
| `10-create-http-server-with-emit.js` | HTTP server using events |
| `11-create-big-file.js` | Creates a large file for testing |
| `12-read-file-by-stream.js` | Reading large files efficiently with streams |
| `13-write-chunked-response.js` | Streaming file content over HTTP |

## Project Structure

```
node-demo/
├── contents/           # Directory for file I/O operations
├── *.js               # Demo files (numbered 1-13)
├── app.js             # Main application entry point
├── package.json       # Project dependencies and scripts
└── README.md          # This file
```

## Dependencies

- **bootstrap**: CSS framework (included in dependencies)
- **nodemon**: Development tool for auto-reloading (dev dependency)

## Learning Path

For best learning experience, follow the files in numerical order:

1. Start with globals and modules (1-4)
2. Learn file system operations (5-6, 8)
3. Understand HTTP servers (7, 10, 13)
4. Explore events and streams (9, 11-12)

## License

ISC
