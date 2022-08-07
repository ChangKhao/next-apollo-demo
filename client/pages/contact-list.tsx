import Head from 'next/head';
import Link from 'next/link';

import Client from '../components/client/Client';
import Contacts from '../components/contacts/Contacts';

export default function ContactList() {
  return (
    <div className="container">
      <Head>
        <title>Contact List | Sapient's NextJS, Apollo GraphQL Test</title>
        <meta name='description' content='Contact list for NextJS, Apollo GraphQL Test' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Client <span>contacts</span></h1>
      <Link href="/"><div className="button secondary">Back Home</div></Link>
      <main>
        <Client>
          <Contacts />
        </Client>
      </main>
    </div>
  );
}