import { Center, FlatList, Heading, VStack } from "native-base";
import HistoryCard from "./HistoryCard";

// state is the current state of the reducer in the App.js file
function History({ state, dispach }) {
  return (
    <VStack
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
     <Heading mt={6} size="lg">
        Sessions History
      </Heading>
      <Center>
        {/* item is necessary to use FlatList */}
        <FlatList mt={5} data={state.sessions} renderItem={({ item }) => (
          // use the HistoryCard component
            <HistoryCard
            date={item.date}
            breakDuration={item.breakDuration}
            workDuration={item.workDuration}
            />
        )} />
      </Center>
    </VStack>
  );
}

export default History;
