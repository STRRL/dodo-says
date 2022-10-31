import { SelectTabData, SelectTabEvent, Tab, TabList, TabValue } from "@fluentui/react-components"
import { useState } from "react";
import { Key24Regular } from "@fluentui/react-icons"
import PublicKeysSetting from "components/PublicKeysSetting";

const Settings = () => {
    const [selectedValue, setSelectedValue] = useState<TabValue>('public-keys');

    const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
        setSelectedValue(data.value);
    };

    return (
        <main>
            <div className="flex p-10">
                <div className="flex-none pr-4">
                    <TabList vertical selectedValue={selectedValue} onTabSelect={onTabSelect}>
                        <Tab value="public-keys" icon={<Key24Regular />}><a className="whitespace-nowrap">Public Keys</a></Tab>
                    </TabList>
                </div>
                <div className="flex-auto h-full">
                    {selectedValue === 'public-keys' && <PublicKeysSetting />}
                </div>
            </div>
        </main>
    )
}

export default Settings
