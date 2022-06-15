import { Box, Flex, Heading, Img } from '@chakra-ui/react';
import NextLink from 'next/link';
import { VFC } from 'react';

import CardAuthor from 'components/ui-elements/CardAuthor';
import CardDate from 'components/ui-elements/CardDate';
import { Blog } from 'types/blog';

type Props = {
  blogData: Pick<Blog, 'id' | 'title' | 'author' | 'thumbnail' | 'createdAt'>;
};

const Article: VFC<Props> = ({ blogData }) => (
  <NextLink href={`/blog/${blogData.id}`} passHref>
    <Box
      as="a"
      bg="white"
      w={{ base: '100%', sm: '47.5%', md: '47.5%' }}
      height="fit-content"
      textStyle="article"
      borderRadius="8px"
      overflow="hidden"
      boxShadow="0px 12px 31px rgba(0, 0, 0, 0.04), 0px 6.00586px 15.5151px rgba(0, 0, 0, 0.0304133), 0px 3.61765px 9.34559px rgba(0, 0, 0, 0.0260636), 0px 2.31838px 5.98915px rgba(0, 0, 0, 0.0228358), 0px 1.50259px 3.88168px rgba(0, 0, 0, 0.02), 0px 0.945861px 2.44347px rgba(0, 0, 0, 0.0171642), 0px 0.543456px 1.40393px rgba(0, 0, 0, 0.0139364), 0px 0.239189px 0.617905px rgba(0, 0, 0, 0.00958669);"
      cursor="pointer"
      transition="all 0.2s"
      _hover={{
        opacity: 0.7,
      }}
    >
      <Img
        src={blogData.thumbnail.url}
        objectFit="cover"
        sx={{
          aspectRatio: '541 / 272.11',
        }}
      />
      <Flex
        justifyContent="space-between"
        flexDirection="column"
        gap="24px"
        py="24px"
        px="16px"
      >
        <CardDate>{blogData.createdAt}</CardDate>
        <Heading as="h3" height="72px">
          {blogData.title}
        </Heading>
        <CardAuthor author={blogData.author[0]} />
      </Flex>
    </Box>
  </NextLink>
);
export default Article;
