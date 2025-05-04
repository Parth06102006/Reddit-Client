# Redifi

Redifi is a modern Reddit client that displays multiple subreddits in customizable lanes. Built with React, TypeScript, and Tailwind CSS, it provides a clean and intuitive interface for browsing Reddit content.
Features

Multiple Subreddit Lanes: Browse different subreddits simultaneously in separate lanes
Customizable Layout: Add, remove, and rearrange subreddit lanes to create your perfect browsing experience
Persistent Settings: Your lane configuration is saved locally and restored on each visit
Responsive Design: Optimized for both desktop and mobile browsing
Real-time Updates: Fetch the latest posts from Reddit's JSON API
Error Handling: Graceful handling of API issues and invalid subreddit names

>[!NOTE]
>Check out my project https://redifi.vercel.app/

### Technology Stack

React: Frontend library for building the user interface
TypeScript: Type safety and improved development experience
Tailwind CSS: Utility-first CSS framework for styling
Axios: Promise-based HTTP client for API requests
Local Storage: For saving user preferences and lane configurations
Vercel: Deployment and hosting platform

### API Integration
Redifi is a frontend-only application that directly fetches data from Reddit's public JSON API:
https://www.reddit.com/r/{subreddit}.json
The application handles CORS limitations, rate limiting, error states, and data transformation on the client side to provide a smooth user experience. No backend server is required as the Reddit API allows direct client-side requests to their JSON endpoints.

>[!NOTE]
>[Additional Project Info](https://roadmap.sh/projects/reddit-client)


