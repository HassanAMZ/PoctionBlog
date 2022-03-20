/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'
import { chakra } from '@chakra-ui/react'
export const MDXComponents = {
  Image,
  TOCInline,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  code: (props) => (
    <chakra.code
      fontSize={['xs', 'sm', 'md', 'md']}
      lineHeight="1.3"
      whiteSpace="pre-wrap"
      py="2"
      wordBreak="break-word"
      {...props}
    />
  ),

  p: (props) => <chakra.p fontSize={['sm', 'md', 'md']} py="2" fontWeight="medium" {...props} />,
  h1: (props) => <chakra.h1 fontWeight="bold" py="2" fontSize="3xl" {...props} />,
  h2: (props) => <chakra.h2 fontWeight="bold" py="2" fontSize={['xl', '2xl', '2xl']} {...props} />,
  h3: (props) => <chakra.h3 fontWeight="bold" py="2" fontSize={['xl', '2xl', '2xl']} {...props} />,
  h4: (props) => <chakra.h4 fontWeight="bold" py="2" fontSize={['xl', '2xl', '2xl']} {...props} />,
  h5: (props) => <chakra.h5 fontWeight="bold" py="2" fontSize={['xl', '2xl', '2xl']} {...props} />,
  h6: (props) => <chakra.h6 fontWeight="bold" py="2" fontSize={['xl', '2xl', '2xl']} {...props} />,

  a: (props) => (
    <chakra.a
      fontSize={['sm', 'md', 'md']}
      color="teal"
      fontWeight="semibold"
      textTransform="capitalize"
      textDecoration="underline"
      textDecorationStyle="dotted"
      _hover={{ color: 'teal.900' }}
      {...props}
    />
  ),

  ul: (props) => (
    <chakra.ul fontSize={['sm', 'md', 'md']} color="teal" fontWeight="semibold" {...props} />
  ),
  li: (props) => (
    <chakra.li fontSize={['sm', 'md', 'md']} color="teal" fontWeight="semibold" {...props} />
  ),
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
