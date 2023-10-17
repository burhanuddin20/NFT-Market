import { STAKE_CONTRACT_ADDRESS, STAKE_TOKEN_ADDRESS } from "../const/addresses";
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
import { Card, Heading, Skeleton, Stack, Text,Container,SimpleGrid } from "@chakra-ui/react";
import StakeToken from "../components/StakeToken";
import RewardToken from "../components/RewardToken";
import Stake from "../components/Stake";

export default function stake() { 
    const address = useAddress();
    return (
        <Container maxW={"1200px"}>
        <SimpleGrid columns={2} spacing={4} mt={10}>
          <StakeToken />
          <RewardToken />
        </SimpleGrid>
        <Stake />
      </Container>
      );};
