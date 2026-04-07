#!/bin/bash

echo "🚀 RDX Fast Food Website - Quick Setup"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installation complete!"
    echo ""
    echo "🎉 Setup successful! You can now:"
    echo ""
    echo "   1. Start development server:"
    echo "      npm run dev"
    echo ""
    echo "   2. Build for production:"
    echo "      npm run build"
    echo ""
    echo "   3. Deploy to Vercel:"
    echo "      npm install -g vercel"
    echo "      vercel"
    echo ""
    echo "📖 Read SETUP.md for detailed instructions"
    echo ""
else
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi
