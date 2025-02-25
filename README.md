# Experience Builder Client Setup
## Romi Julianto
## Prerequisites
- Node.js with NVM
- PM2 installed globally
- Visual Studio Code (recommended)

## Initial Setup

### 1. Extract Data Files
Before running the application, you need to extract the data files:

1. Locate `data.zip` in the `data` folder
2. Extract all contents to the root folder:
   ```cmd
   cd /path/to/root
   tar -xf data/data.zip
   ```
   
   Or use Windows Explorer:
   - Navigate to the `data` folder
   - Right-click `data.zip`
   - Select "Extract All..."
   - Choose the root folder as destination

### 2. Run Development Server
Start the development server using PM2:

```cmd
pm2 start ecosystem.config.js
```

Monitor the server:
```cmd
pm2 logs exb-client
```

Stop the server:
```cmd
pm2 stop exb-client
```

## Additional Commands
- Check server status: `pm2 status`
- Restart server: `pm2 restart exb-client`
- Delete server: `pm2 delete exb-client`

## Project Structure
```
client/
├── data/
│   └── data.zip
├── ecosystem.config.js
├── package.json
└── webpack/
```