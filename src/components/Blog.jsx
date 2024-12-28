import { Card } from './Card'
import { Nav } from './Nav';
import enc1 from '/enc4.jpg';
import enc2 from '/enc3.jpg';
import enc3 from '/enc2.jpg';

export const Blog = () =>
{
    return (
        <>
            <Nav/>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <Card
          imageSrc={enc1}
          date="13 Jul 2024"
          title="Secure Your Data"
          description="Utilize our cutting-edge symmetric encryption to protect your information from unauthorized access."
          likes="7.4K"
          comments="81"
        />
        <Card
         
          imageSrc={enc2}              
          date="4 Nov 2024"
          title="User-Friendly Interface"
          description="Our platform offers an intuitive interface for easy encryption and decryption of your sensitive files."
          likes="7.1K"
          comments="41"
        />
        <Card
          imageSrc={enc3}              
          date="8 Dec 2024"
          title="Global Encryption Standards"
          description="We adhere to international security protocols to ensure your data remains confidential across borders."
          likes="7.6K"
          comments="81"
        />
        <Card
          imageSrc={enc1}              
          date="18 Dec 2024"
          title="Advanced Protection"
          description="Encrypt your data with our robust algorithms designed for maximum security."
          likes="7.4K"
          comments="50"
        />
        <Card
        //   imageSrc="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          imageSrc={enc3}
          date="28 Dec 2020"
          title="Simplified Decryption Process"
          description="Retrieve your encrypted data seamlessly with our user-centric decryption solutions."
          likes="7.2K"
          comments="31"
        />
      </div>
            </div>
            </>
  );
};
