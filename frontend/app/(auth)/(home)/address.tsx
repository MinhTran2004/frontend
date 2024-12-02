import AppHeader from "@/components/AppHeader";
import ItemAddress from "@/components/home/ItemAdress";
import PrimaryButton from "@/components/PrimaryButton";
import ViewModelAddress from "@/viewmodel/home/address.viewmodel";
import { useNavigation } from "@react-navigation/native";
import { FlatList, View } from "react-native";

const Address = () => {
    const navigation = useNavigation();
    const viewModel = ViewModelAddress();
    console.log(viewModel.dataAddress);
    
    return (
        <View style={{ flex: 1 }}>
            <AppHeader iconLeft="left" title="Địa chỉ" iconRight="none" onPressIconLeft={() => navigation.goBack()} />
            <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>

                <FlatList
                    data={viewModel.dataAddress}
                    renderItem={({ item }) => <ItemAddress {...item}/>} />

                <PrimaryButton
                    label="Thêm địa chỉ mới"
                    onPress={() => { }}
                />
            </View>
        </View>
    );
}

export default Address;