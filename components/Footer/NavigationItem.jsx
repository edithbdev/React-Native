import { Pressable, Text, Center, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

// we retrieve props from the parent component (Footer)
const NavigationItem = ({ id, icon, label, selected, setSelected }) => {
const navigation = useNavigation();
    return (
         <Pressable
                flex="1"
                px="4"
                opacity={selected === id ? 1 : 0.3}
                onPress={() => {
                    setSelected(id);
                    navigation.navigate(label);
                }}
                >
                    <Center>
                        <Icon
                        as= {
                            <MaterialIcons name={icon} size={30} color="white" />
                        }
                         />
            <Text color="white" fontSize="12">
               {label}
            </Text>
             </Center>
                </Pressable>

    );
};
export default NavigationItem;
