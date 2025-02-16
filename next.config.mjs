import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[{

            protocol:'https',
            hostname:'img.clerk.com',
        }

        ],
        remotePatterns:[{

            protocol:'https',
            hostname:'ucarecdn.com',
        }

        ],
        domains: [
            'avatars.githubusercontent.com', 
            'lh3.googleusercontent.com', 
            'res.cloudinary.com',
            'gomoonbeam.com',
            'cursor.so',
            'userogue.com',
            'editorially.org',
            'editrix.ai',
            'app.pixelperfect.quest',
            'algochurn.com',
            'ui.aceternity.com',
            'tailwindmasterkit.com',
            'smartbridgetech.com',
            'renderwork.studio',
            'cremedigital.com',
            'goldenbellsacademy.com',
            'invoker.lol',
            'efreeinvoice.com',
            'aceternity.com',
        ],
    }
};

export default nextConfig;
