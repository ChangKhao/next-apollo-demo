import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from 'next';

const Page: NextPage = () => {
    return (
        <div className='container'>
            <Head>
                <title>Sapient's NextJS, Apollo GraphQL Test</title>
                <meta name='description' content='NextJS, Apollo GraphQL Test' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <h1>Welcome to the <span>test</span></h1>
            <div className="card-container">
                <h3><span>About this test</span></h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum viverra neque nec porta. 
                    Aliquam porta dui et elit porta, in tempus orci interdum. Fusce nisl ex, tempor et mi in, viverra laoreet erat. 
                    Fusce tempor massa id mollis mollis. Aliquam efficitur semper mi, sed tincidunt mauris ornare ullamcorper. 
                    In dictum nibh et tincidunt rutrum. Maecenas quis consequat metus, at cursus orci. Phasellus vel fringilla augue, in ornare nibh. 
                    Suspendisse potenti. Suspendisse ac purus pellentesque, consequat ante in, iaculis nisl. 
                    Aenean semper pellentesque mauris, et vehicula magna. Suspendisse eu nisl vel quam scelerisque condimentum. 
                    Etiam cursus id erat sit amet condimentum. Donec maximus blandit neque vel iaculis.
                </p>
                <Link href="/about-test"><div className='button primary'>Read more</div></Link>
            </div>

            <div className="card-container">
                <h3><span>Clients</span></h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum viverra neque nec porta. 
                    Aliquam porta dui et elit porta, in tempus orci interdum. Fusce nisl ex, tempor et mi in, viverra laoreet erat. 
                    Fusce tempor massa id mollis mollis. Aliquam efficitur semper mi, sed tincidunt mauris ornare ullamcorper. 
                    In dictum nibh et tincidunt rutrum. Maecenas quis consequat metus, at cursus orci. Phasellus vel fringilla augue, in ornare nibh. 
                    Suspendisse potenti. Suspendisse ac purus pellentesque, consequat ante in, iaculis nisl. 
                    Aenean semper pellentesque mauris, et vehicula magna. Suspendisse eu nisl vel quam scelerisque condimentum. 
                    Etiam cursus id erat sit amet condimentum. Donec maximus blandit neque vel iaculis.
                </p>
               <Link href="/contact-list"><div className="button primary">See contact list</div></Link> 
            </div>
            
        </div>
    );
};

export default Page;