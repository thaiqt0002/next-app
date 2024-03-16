import '@/ui/global.css';
import Navbar  from './home/navbar'

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <html>    
      <body className='flex flex-col min-h-screen bg-[#f5f5fa] relative'>  
        <Navbar/>
        {children}
      </body>
    </html>
  );
}