# React Notifs

A collection of reusable React notification components built with TypeScript, including badges, banners, and cards.

## Features

- ✅ TypeScript support for better type safety
- 🌙 Dark mode support with theme toggling
- 📱 Responsive design for all screen sizes
- 🧩 Reusable components with proper accessibility
- 🧪 Unit tests for component validation

## Getting Started

Install the dependencies and run the project:

```bash
npm install
npm start
```

For production build:

```bash
npm run build
```

## Components

### Badge

Badges are used to highlight an item's status for quick recognition.

```tsx
<Badge color="blue" shape="pill">Badge</Badge>
```

**Props:**

- `color`: gray, red, yellow, green, blue, indigo, purple, pink, white (default: white)
- `shape`: square, pill (default: pill)

### Banner

Banners display important messages to users.

```tsx
<Banner type="success" line="multiline">
  Success message with details
</Banner>
```

**Props:**

- `type`: success, warning, error, neutral
- `line`: singleline, multiline

### Card

Cards display content and actions about a single subject.

```tsx
<Card title="Card Title">
  Card content goes here
</Card>
```

**Props:**

- `title`: The card title
- `children`: The card content
- `icon`: Optional custom icon component

## Development

### Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Run linting
- `npm run format` - Format code with Prettier
