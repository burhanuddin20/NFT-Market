import { Card, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
import { REWARDS_CONTRACT_ADDRESS } from "../const/addresses";

export default function StakeToken() {
    const address = useAddress();
    const { contract: stakeTokenContract, isLoading: loadingStakeToken } = useContract(REWARDS_CONTRACT_ADDRESS);

    const { data: tokenBalance, isLoading: loadingTokenBalance } = useTokenBalance(stakeTokenContract, address);
    
    return (
        <Card p={5}>
            <Stack>
                <Heading>Reward Token</Heading>
                <Skeleton h={4} w={"50%"} isLoaded={!loadingStakeToken && !loadingTokenBalance}>
                    <Text fontSize={"large"} fontWeight={"bold"}>${tokenBalance?.symbol}</Text>
                </Skeleton>
                <Skeleton h={4} w={"100%"} isLoaded={!loadingStakeToken && !loadingTokenBalance}>
                    <Text>{tokenBalance?.displayValue}</Text>
                </Skeleton>
            </Stack>
        </Card>
    )
}