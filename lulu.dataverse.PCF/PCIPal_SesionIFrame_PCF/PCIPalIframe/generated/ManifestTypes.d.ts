/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    pcf_trigger: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    api_url_instance_name: ComponentFramework.PropertyTypes.StringProperty;
    incident_id: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    pcf_trigger?: boolean;
}
