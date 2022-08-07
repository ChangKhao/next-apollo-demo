import Head from 'next/head';
import Link from "next/link";

export default () => (
    <div className="container">
        <Head>
            <title>About | Sapient's NextJS, Apollo GraphQL Test</title>
            <meta name='description' content='Aboout NextJS, Apollo GraphQL Test' />
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <h1>About this <span>test</span></h1>
        <Link href="/"><div className="button secondary">Go Back</div></Link>
        <div className="card-container">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum viverra neque nec porta. 
                Aliquam porta dui et elit porta, in tempus orci interdum. Fusce nisl ex, tempor et mi in, viverra laoreet erat. 
                Fusce tempor massa id mollis mollis. Aliquam efficitur semper mi, sed tincidunt mauris ornare ullamcorper. 
                In dictum nibh et tincidunt rutrum. Maecenas quis consequat metus, at cursus orci. Phasellus vel fringilla augue, in ornare nibh. 
                Suspendisse potenti. Suspendisse ac purus pellentesque, consequat ante in, iaculis nisl. 
                Aenean semper pellentesque mauris, et vehicula magna. Suspendisse eu nisl vel quam scelerisque condimentum. 
                Etiam cursus id erat sit amet condimentum. Donec maximus blandit neque vel iaculis.
            </p>
            <p>
                Nullam convallis metus in neque consequat elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                Phasellus sit amet tellus erat. Duis tincidunt volutpat felis, in aliquam risus convallis nec. 
                Donec orci elit, gravida aliquam nisi tincidunt, molestie mattis velit. 
                Aliquam lectus massa, dignissim sed auctor venenatis, egestas posuere turpis. Cras tempor mollis ultrices. 
                Aliquam dolor sem, vestibulum et mi non, luctus vestibulum mauris. Sed quis mi semper, dignissim leo gravida, semper ipsum. 
                Ut maximus ac neque ut interdum.
            </p>
            <p>
                Nulla a quam sapien. Nunc luctus ex in neque consectetur, id molestie dolor blandit. Fusce auctor orci vel vehicula porta. 
                Nunc aliquam pretium tellus. Proin euismod, velit vel luctus venenatis, lorem nisi condimentum dolor, sed tempor nulla mi vel neque. 
                Etiam lacinia mi nec quam eleifend, vitae viverra felis porttitor. Vivamus in mauris eros. Donec et dui vel nulla semper luctus. 
                Aliquam eget sollicitudin eros.
            </p>
            <p>
                Vestibulum accumsan interdum quam non ullamcorper. Donec nec consequat magna, vitae vulputate est. Donec id felis est. 
                Nunc malesuada interdum vehicula. Vestibulum posuere eget magna eget lacinia. Quisque sodales magna non interdum sagittis. 
                Mauris in augue ut leo porta tempus.
            </p>
            <p>
                Aenean efficitur tempus lectus sit amet congue. Nulla dignissim mattis ultricies. Aliquam nec lorem a dui tincidunt tempor ut sed sem. 
                Fusce egestas elit nisl, ut accumsan nibh lobortis nec. Integer et malesuada sem. 
                Nullam pretium diam vitae orci elementum, eu dictum nisl ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque iaculis erat lectus. Duis porta, risus at mollis imperdiet, augue libero dictum nulla, vel auctor enim odio non odio. 
                Nam sit amet molestie lacus. Aliquam eget ante sagittis, feugiat urna non, porttitor arcu. 
                Proin justo neque, sagittis eu turpis nec, feugiat pellentesque odio.
            </p>
        </div>
    </div>
)