import { Box, Center, Flex } from '@chakra-ui/react';
import React from 'react';

import Card from 'components/ui-parts/Card';
import CardListTitle from 'components/ui-parts/CardListTitle';
import Head from 'components/ui-parts/Head';
import Pagination from 'components/ui-parts/Pagination';
import { getBlogs } from 'libs/apiClient';
import { Blog, Category } from 'types/blog';
import { MicroCMSList } from 'types/microCMS';

import type { NextPage } from 'next';

type Props = {
  blogData: MicroCMSList<Blog>;
  category: Category;
};

const categoryCorrespondenceTable: { [K in Category]: string } = {
  column: 'コラム',
  engineer: 'エンジニア',
  design: 'デザイン',
};

const Index: NextPage<Props> = ({ blogData, category }) => (
  <>
    <Head />
    <Box as="main" mt="80px" w="90vw" mx="auto" maxW="1300px">
      <CardListTitle title={categoryCorrespondenceTable[category]} />
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        gap="40px 0"
        mt="40px"
      >
        {blogData.contents.map((blog) => (
          <Card blogData={blog} key={blog.id} />
        ))}
      </Flex>
      <Center mt="64px">
        <Pagination totalBlogCount={blogData.totalCount} />
      </Center>
    </Box>
  </>
);

export const getStaticPaths = () => {
  const categories = ['design', 'engineer', 'column'];

  return {
    paths: categories.map((category) => ({ params: { category } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { category: Category };
}) => {
  const blogData = await getBlogs({ category: params.category });

  return {
    props: {
      blogData,
      category: params.category,
    },
  };
};

export default Index;