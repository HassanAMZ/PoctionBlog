import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, Grid, GridItem, Box } from '@chakra-ui/react'
const PreviousClient = () => {
  const clientImageIDs = [
    'harmon',
    'enhanza',
    'shepherd',
    'digitalenergyrevolution',
    'ozeanriesen',
    'cmrd',
    'startafaq',
    'bearcreekknives',
    'stepbystep',
    'wbi',
    'equifund',
    'roastycoffee',
    'figment',
    'waitlistr',
  ]
  return (
    <Grid
      templateColumns={{
        base: 'repeat(auto-fill, minmax(80px, 1fr));',
        sm: 'repeat(auto-fill, minmax(120px, 1fr));',
        md: 'repeat(auto-fill, minmax(150px, 1fr));',
      }}
      py="5"
      placeContent="center"
      gap={{
        base: '5',
        sm: '6',
        md: '7',
      }}
    >
      {clientImageIDs.map((id, index) => {
        return (
          <GridItem
            height={{
              base: '30px',
              sm: '50px',
              md: '75px',
            }}
            position="relative"
            key={index}
          >
            <Image
              alt={id}
              src={`/static/previousClients/${id}.png`}
              layout="fill"
              objectFit="contain"
            />
          </GridItem>
        )
      })}
    </Grid>
  )
}
export default PreviousClient
