# Eva's Portfolio - Cloudflare Tunnel Deployment

This guide will help you deploy Eva's portfolio website using Cloudflare Tunnel with Docker Compose.

## Prerequisites

1. **Cloudflare Account**: You need a Cloudflare account with your domain (`evaberlynalonso.com`) managed by Cloudflare
2. **Docker & Docker Compose**: Installed on your server
3. **Domain**: `evaberlynalonso.com` should be added to your Cloudflare account

## Setup Instructions

### Step 1: Create a Cloudflare Tunnel

1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Zero Trust** > **Networks** > **Tunnels**
3. Click **Create a tunnel**
4. Choose **Cloudflared** as the connector
5. Name your tunnel (e.g., "eva-portfolio")
6. In the "Install and run a connector" step, select **Docker**
7. Copy the token from the Docker command shown (the long string after `--token`)

### Step 2: Set up Environment Variables

Create a `.env` file in the project root with the token from Step 1:

```bash
# Replace with your actual tunnel token from Step 1
TOKEN=your_actual_tunnel_token_here
```

**Important**: Use the complete token from the Docker command Cloudflare shows you (it starts with "eyJ..." and is very long).

### Step 3: Configure DNS in Cloudflare

1. **Skip the connector installation** in the Cloudflare interface (we'll use Docker Compose instead)
2. Go to the **Route tunnel** step
3. Add a **Public Hostname**:
   - **Subdomain**: `www`
   - **Domain**: `evaberlynalonso.com`
   - **Type**: `HTTP`
   - **URL**: `website:3000`

4. Click **Save tunnel**

### Step 4: Deploy

Run the following command to build and start the services:

```bash
docker-compose up -d
```

This will:
- Build the Next.js application
- Start the website container on port 3000
- Start the Cloudflare tunnel container with your token
- Connect them via the `cloudflared` network

### Step 5: Verify Deployment

1. Check that containers are running:
   ```bash
   docker-compose ps
   ```

2. Check logs if needed:
   ```bash
   docker-compose logs cloudflared
   docker-compose logs website
   ```

3. In the Cloudflare dashboard, you should see your connector as "Connected"
4. Visit `https://www.evaberlynalonso.com` to see the live site

## Troubleshooting

### Common Issues

1. **Tunnel not connecting**: 
   - Check that your `TOKEN` in `.env` is correct and complete
   - Ensure there are no extra spaces or characters in the token
   
2. **DNS not resolving**: 
   - Ensure the DNS record is properly configured in Cloudflare
   - Wait a few minutes for DNS propagation
   
3. **Website not loading**: 
   - Check that the website container is running: `docker-compose logs website`
   - Ensure the service URL in Cloudflare points to `website:3000`

### Useful Commands

```bash
# View logs
docker-compose logs -f

# Restart services
docker-compose restart

# Stop services
docker-compose down

# Rebuild and restart
docker-compose up -d --build
```

## Security Notes

- Keep your `.env` file secure and never commit it to version control
- The tunnel token provides access to your Cloudflare account, treat it like a password
- Consider using Cloudflare Access for additional security if needed

## Updates

To update the website:

1. Pull the latest changes
2. Rebuild and restart: `docker-compose up -d --build`

The tunnel will automatically reconnect and serve the updated content. 