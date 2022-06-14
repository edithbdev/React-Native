import { Box, HStack } from "native-base";
import { useState } from "react";
import { footerNavigation } from "../../utils/data";
import NavigationItem from "./NavigationItem";

const Footer = () => {
    const [ selected, setSelected ] = useState(1);

    return (
        <Box bg="white" width="100%" mb={50}>
            <HStack bg="black" justifyContent="space-evenly" py="3">
                {/* we loop through the footerNavigation array using NavigationItem component */}
                {footerNavigation.map((route) => (
                    // desctructure the route object and pass it to the NavigationItem component
                <NavigationItem
                    key={route.id}
                    id={route.id}
                    icon={route.icon}
                    label={route.label}
                    selected={selected}
                    setSelected={setSelected}
                />
                ))}
            </HStack>
        </Box>
    );
}

export default Footer;
