<div align="center">

# Lakay AI
   
![CopilotKit-Banner](https://github.com/user-attachments/assets/8167c845-0381-45d9-ad1c-83f995d48290)
</div>

Lakay AI is an example for the implementation of the MCP server-client integrations to handle and manage your projects and tasks from your project management applications like Linear.

## Key Features

- **CopilotKit AI Chat Interface:**  
  Chat with the CopilotKit AI which acts as useful assitant who can able to provide answers to user queries and perform executable actions inside the application.
  
- **Real-Time Interactivity:**  
  Enjoy a live chat powered by `@copilotkit/react-ui` that orchestrates dynamic state changes and agent responses.

- **State Management & Agent Coordination:**  
  Leverages `@copilotkit/react-core` for robust agent state management and smooth integration of travel and research functionalities.

- **Responsive & Modern UI:**  
  Designed with Tailwind CSS to ensure your experience is smooth and adaptive across all devices.

## Technology Stack

- **Framework:** [Next.js](https://nextjs.org)
- **UI Library:** React, [CopilotKit UI](https://www.npmjs.com/package/@copilotkit/react-ui)
- **State Management:** [CopilotKit React Core](https://www.npmjs.com/package/@copilotkit/react-core)

- **Styling:** Tailwind CSS
- **Additional Libraries:**
  - React Query for data fetching
  - Framer Motion for animations
  - Radix UI for accessible components
  - React Flow for flow diagrams

## Project Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (v20.x or later recommended)
- npm, yarn, or pnpm (package manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd projetlakay-main-2
```

2. Install dependencies:
Using npm:
```bash
npm install
```
Or using yarn:
```bash
yarn install
```
Or using pnpm:
```bash
pnpm install
```

## Environment Setup

1. Create a `.env` file in the root directory:
```bash
cp env.example .env
```

2. Configure your environment variables in the `.env` file:
- If self-hosting:
  ```
  OPENAI_API_KEY=your_openai_api_key_here
  ```
- If using Copilot Cloud:
  ```
  NEXT_PUBLIC_COPILOT_CLOUD_API_KEY=your_copilot_cloud_api_key_here
  ```

## Development Server

Start the development server:

Using npm:
```bash
npm run dev
```
Or using yarn:
```bash
yarn dev
```
Or using pnpm:
```bash
pnpm dev
```

Once started, open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Tech Stack

This project uses:
- Next.js 15.1.6
- React 19
- TypeScript
- Tailwind CSS
- Various UI components from Radix UI
- Leaflet for maps
- React Query for data fetching
- Framer Motion for animations

## Additional Notes

- The project uses TypeScript for type safety
- ESLint is configured for code linting
- Tailwind CSS is used for styling
- The project includes various UI components from Radix UI and other libraries

## Troubleshooting

If you encounter any issues:

1. Make sure all prerequisites are installed correctly
2. Verify that your Node.js version is compatible
3. Ensure all environment variables are set correctly
4. Try removing `node_modules` and package lock files, then reinstall dependencies:
   ```bash
   rm -rf node_modules
   rm package-lock.json # or yarn.lock or pnpm-lock.yaml
   npm install # or yarn install or pnpm install
   ```

## Project Structure

- **/src/app:**  
  Contains Next.js page components, layouts, and global styles.

- **/src/components:**  
  Houses reusable components including agent interfaces (Travel, Research, Chat, Map, Sidebar) and UI elements.

- **/src/providers:**  
  Wraps the global state providers responsible for managing agent states.

- **/src/lib:**  
  Contains utility functions and configuration files.

- **/src/hooks:**  
  Custom React hooks for shared functionality.

- **/src/contexts:**  
  React context providers for global state management.

## Development

- **Linting:**  
  ```bash
  npm run lint
  # or
  yarn lint
  # or
  pnpm lint
  ```

- **Building for Production:**  
  ```bash
  npm run build
  # or
  yarn build
  # or
  pnpm build
  ```

## Deployment

The easiest way to deploy this project is with [Vercel](https://vercel.com). Build and start your application with:
```bash
npm run build
npm run start
```
Follow Vercel's deployment guide for more details if needed.

## Contributing

Contributions are welcome! Fork the repository and submit a pull request with any improvements, bug fixes, or new features.

## License

Distributed under the MIT License. See `LICENSE` for more information.
