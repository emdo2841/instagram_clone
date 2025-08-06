import '../styles/login.css';
// Import images at the top - try different approach for Post3
import imageOne from '../assets/Post1.png';
import imageTwo from '../assets/Post2.png';
import postThreeImg from '../assets/Post3.png';
import imageFour from '../assets/Post4.png';
import imageFive from '../assets/Post5.png';
import imageSix from '../assets/Post6.png';
import imageSeven from '../assets/Post7.png';
import imageEight from '../assets/Post8.png';
import imageNine from '../assets/Post9.png';
import imageTen from '../assets/Post10.png';
import imageEleven from '../assets/Post11.png'

export const ExplorePage = () => {
    // Debug: Log imported images
    console.log('Image imports:', {
        imageOne,
        imageTwo, 
        postThreeImg,
        imageFour
    });

    const posts = [
        { id: 1, image: imageOne, aspectRatio: 'aspect-square' },
        { id: 2, image: imageTwo, aspectRatio: 'aspect-[2/3]' },
        { id: 3, image: postThreeImg, aspectRatio: 'aspect-square' },
        { id: 4, image: imageFour, aspectRatio: 'aspect-square' },
        { id: 5, image: imageFive, aspectRatio: 'aspect-square' },
        { id: 6, image: imageSix, aspectRatio: 'aspect-square' },
        { id: 7, image: imageSeven, aspectRatio: 'aspect-square' },
        { id: 8, image: imageEight, aspectRatio: 'aspect-[4/5]' },
        { id: 9, image: imageNine, aspectRatio: 'aspect-square' },
        { id: 10, image: imageTen, aspectRatio: 'aspect-[2/3]' },
        { id: 11, image: imageEleven, aspectRatio: 'aspect-[2/1]' }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header with Search */}
            <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
                <div className="px-4 py-3">
                    <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="bg-transparent flex-1 outline-none text-gray-600"
                        />
                        <div className="w-6 h-6 border border-gray-400 rounded flex items-center justify-center ml-3">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Category Buttons */}
                <div className="px-4 pb-3">
                    <div className="flex gap-3 overflow-x-auto">
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg whitespace-nowrap">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 6h16v2H4V6zM4 11h16v2H4v-2zM4 16h16v2H4v-2z"/>
                            </svg>
                            IGTV
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg whitespace-nowrap">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7 4V2a1 1 0 0 1 2 0v2h6V2a1 1 0 0 1 2 0v2h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3z"/>
                            </svg>
                            Shop
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg whitespace-nowrap">
                            Style
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg whitespace-nowrap">
                            Sports
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg whitespace-nowrap">
                            Auto
                        </button>
                    </div>
                </div>
            </header>

            {/* Posts Grid */}
            <main className="px-1 pb-20">
                <div className="grid grid-cols-3 gap-1">
                    {posts.map((post, index) => (
                        <div 
                            key={post.id} 
                            className={`relative overflow-hidden ${
                                index === 1 ? 'col-span-2 row-span-2' : 
                                index === 9 ? 'row-span-2' : 
                                'col-span-1'
                            }`}
                        >
                            <img 
                                src={post.image} 
                                alt={`Post ${post.id}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                onError={(e) => {
                                    console.error(`❌ Failed to load image for post ${post.id}:`, post.image);
                                    console.error('Image source type:', typeof post.image);
                                    // Show a placeholder when image fails to load
                                    e.target.style.backgroundColor = '#f3f4f6';
                                    e.target.style.border = '1px solid #d1d5db';
                                    e.target.style.display = 'flex';
                                    e.target.style.alignItems = 'center';
                                    e.target.style.justifyContent = 'center';
                                    e.target.innerHTML = `<span style="color: #6b7280; font-size: 12px;">Post ${post.id} Failed</span>`;
                                }}
                                onLoad={() => {
                                    console.log(`✅ Successfully loaded image for post ${post.id}`);
                                }}
                            />
                            {/* Post overlay for reels indicator */}
                            {(index === 2 || index === 7 || index === 11) && (
                                <div className="absolute top-2 right-2">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
                <div className="flex justify-around py-2">
                    <button className="p-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </button>
                    <button className="p-3">
                        <svg className="w-6 h-6 text-black" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <button className="p-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                    <button className="p-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                    <button className="p-3">
                        <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face" 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </button>
                </div>
            </nav>
        </div>
    );
}
