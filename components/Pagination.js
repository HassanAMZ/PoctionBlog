import Link from '@/components/Link'
import { Box, Button, Flex } from '@chakra-ui/react'
export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <Box py="6">
      <Flex
        as="nav"
        direction="row"
        justifyContent="justify-between"
        className="flex justify-between"
      >
        {!prevPage && (
          <Button
            rel="previous"
            rounded={'full'}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            colorScheme={'teal'}
            bg={'teal.400'}
            _hover={{ bg: 'teal.500' }}
            my="4"
            isDisabled={!prevPage}
          >
            Previous
          </Button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'teal'}
              bg={'teal.400'}
              _hover={{ bg: 'teal.500' }}
              my="4"
              rel="previous"
            >
              Previous
            </Button>
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <Button
            rounded={'full'}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            colorScheme={'teal'}
            bg={'teal.400'}
            _hover={{ bg: 'teal.500' }}
            my="4"
            rel="next"
            isDisabled={!nextPage}
          >
            Next
          </Button>
        )}
        {nextPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'teal'}
              bg={'teal.400'}
              _hover={{ bg: 'teal.500' }}
              my="4"
              rel="next"
            >
              Next
            </Button>
          </Link>
        )}
      </Flex>
    </Box>
  )
}
