// import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';
import PrismicDOM from 'prismic-dom';

import { client } from '@/lib/prismic';

import {
  Container,
  Section,
  ContainerLeft,
  ContainerRight,
} from '@/styles/pages/home';

import SEO from '@/components/SEO';
import { ExperienceBar } from '@/components/ExperienceBar';
import { Profile } from '@/components/Profile';
import { CompletedChallenges } from '@/components/CompletedChallenges';
import { Countdown } from '@/components/Countdown';
import { ChallengeBox } from '@/components/ChallengeBox';

// TODO: CLIENT SIDE FETCHING
// interface IProduct {
//   id: string;
//   title: string;
// }

// TODO: SERVER SIDE FETCHING
interface HomeProps {
  recommendedProducts: Document[];
}

export default function Home({ recommendedProducts }: HomeProps) {
  // TODO: CLIENT SIDE FETCHING
  // const apiUrl = process.env.API_URL + '/recommended';
  // const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   fetch(apiUrl).then(response => {
  //     response.json().then(data => {
  //       setRecommendedProducts(data);
  //     })
  //   })
  // }, []);

  return (
    <Container>
      <SEO
        title="Start 🚀"
        image="teste.jpg"
        // shouldExcludeTitleSuffix
      />

      <ExperienceBar />

      <Section>
        <ContainerLeft>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </ContainerLeft>
        <ContainerRight>
          <ChallengeBox />
        </ContainerRight>
      </Section>

      {/* <section>
        <h1>Products</h1>

        <ul>
          {recommendedProducts.map((recommendedProduct) => {
            return (
              <li key={recommendedProduct.id}>
                <Link href={`/catalog/products/${recommendedProduct.uid}`}>
                  {PrismicDOM.RichText.asText(recommendedProduct.data.title)}
                </Link>
              </li>
            );
          })}
        </ul>
      </section> */}
    </Container>
  );
}

// TODO: SERVER SIDE FETCHING
// export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
//   const apiUrl = process.env.API_URL + "/recommended";
//   const response = await fetch(apiUrl);
//   const recommendedProducts = await response.json();

//   return {
//     props: {
//       recommendedProducts,
//     },
//   };
// };

// export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
//   const recommendedProducts = await client().query([
//     Prismic.Predicates.at('document.type', 'product'),
//   ]);

//   return {
//     props: {
//       recommendedProducts: recommendedProducts.results,
//     },
//   };
// };
