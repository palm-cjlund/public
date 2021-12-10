import { IInputs, IOutputs } from "./generated/ManifestTypes";

//const PCIPal_SessionViewURL = "https://<Region>.<Environment>/session/<TenantID>/view/<SessionId>/framed";
const PCIPal_Environment_EVConstValName = "lulu_PCIPal_Environment";
const PCIPal_Region_EVConstValName = "lulu_PCIPal_Region";
const PCIPal_TenantID_EVConstValName = "lulu_PCIPal_TenantID"; 
const PCIPal_form_html_element_ID = "PCIPal_PCF_form";
const PCIPal_iframe_element_ID = "PCIPal_PCF_Iframe";
const Alert_DivContainer_Notification_Element_ID = "ADNEID";
const Alert_Label_Notification_Element_ID = "ALNEID";
const Alert_Icon_Notification_Element_ID = "AINEID";

const Error_Label_ID = "Error_PCIPal_Label_Element";

export class PCIPalIframe implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	/// Context values
	// reference to ComponentFramework Context object
	private _context: ComponentFramework.Context<IInputs>;
	private _clientInstanceURL: String | null = null;
	private _incidentID: String | null = null;
	private _PCIPal_Environment_Val: String | null = null;
	private _PCIPal_Region_Val: String | null = null;
	private _PCIPal_TenantID_Val: String | null = null;

	/// HTML components
	// reference to the control container HTMLDivElement 
	private _container: HTMLDivElement;
	// Flag if control view has been rendered
	private _controlViewRendered: Boolean;
	// Controls
	// Alert Notifications elements 
	private _alertNotificationIcon: HTMLImageElement;
	private _alertDivContatiner: HTMLDivElement;
	private _alertLabelElement: HTMLLabelElement;

	private _errorContainer: HTMLDivElement;
	private _errorLabelElement: HTMLElement;
	private _controlsDiv: HTMLDivElement;
	private _sessionIFrameDiv: HTMLDivElement;
	private _buttonOps1: HTMLButtonElement;

	//// Persisted values
	// Data type used to store the various information as part of the state object.
	private _stateDictionary: ComponentFramework.Dictionary = {};
	// Tokens generated from the previous action
	private _persistedSesionValue: String | null;
	// Actual token values defined by the ribbon button function
	private _actualPersistedTokenValues: String | null;


	/**
	 * Empty constructor.
	 */
	constructor()
	{

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
	{
		//debugger;
		this._controlViewRendered = false;
		this._container = document.createElement("div");
		this._context = context;

		this._container.classList.add("PCIPalControl_Container");
		container.appendChild(this._container);

		/////// get environment variables 
		this.GetandSetEnvironmentVariableValue(PCIPal_Environment_EVConstValName);
		this.GetandSetEnvironmentVariableValue(PCIPal_Region_EVConstValName);
		this.GetandSetEnvironmentVariableValue(PCIPal_TenantID_EVConstValName);

	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		//debugger;

		this.renderAlertElements();

		if (!this._controlViewRendered) {

			this._controlsDiv = this.renderDivControlsElement("Div_controls");
			this._buttonOps1 = this.renderButtonElement("Launch PCIPal", "digitalorder");
			this._controlsDiv.appendChild(this._buttonOps1);

			this._container.appendChild(this._controlsDiv);

			this._sessionIFrameDiv = this.renderDivControlsElement("Iframe_Div_Control");

			this._container.appendChild(this._sessionIFrameDiv);

			this._controlViewRendered = true;
		}
	}

	/**
	 * It is called by the framework prior to a control receiving new data.
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		return {};
	}

	/**
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}

	//// Helpers ...............................................................................................................................

	private renderAlertElements(): any {

		this._alertNotificationIcon = document.createElement("img");
		this._alertNotificationIcon.setAttribute("id", Alert_Icon_Notification_Element_ID);
		this._alertNotificationIcon.setAttribute("src","data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
		this._alertNotificationIcon.border = "none";
		this._alertNotificationIcon.style.display = "block";
		this._alertNotificationIcon.style.lineHeight = "0";
		this._alertNotificationIcon.classList.add("Alert_icon");
		
		this._alertLabelElement = document.createElement("label");
		this._alertLabelElement.setAttribute("id", Alert_Label_Notification_Element_ID);

		this._alertDivContatiner = document.createElement("div");
		this._alertDivContatiner.classList.add("Alert_Div_Container");
		this._alertDivContatiner.setAttribute("id", Alert_DivContainer_Notification_Element_ID); 
		
		this._alertDivContatiner.appendChild(this._alertNotificationIcon);
		this._alertDivContatiner.appendChild(this._alertLabelElement);

		this._container.appendChild(this._alertDivContatiner);
	}

	
	private static displayAlertNotification(Ops: string, timmerAlert: number, msgAlert: string): any{

		let alertDivContainerElement = document.getElementById(Alert_DivContainer_Notification_Element_ID);

		let alerIconElement = document.getElementById(Alert_Icon_Notification_Element_ID);

		let alertLabelElement = document.getElementById(Alert_Label_Notification_Element_ID);
		if (typeof (alertLabelElement) != 'undefined' && alertLabelElement != null) {
			alertLabelElement.innerHTML = msgAlert;
		}

		switch (Ops) {

			case "Info":
				alertDivContainerElement?.classList.add("displayInfo");
				alerIconElement?.classList.add("InfoIcon");
				alertLabelElement?.classList.add("InfoLabel");

				setTimeout(function () {
					alertDivContainerElement?.classList.remove("displayInfo");
					alerIconElement?.classList.remove("InfoIcon");
					alertLabelElement?.classList.remove("InfoLabel");
				}, timmerAlert);

				break;
			case "Warning":
				alertDivContainerElement?.classList.add("displayWarning");
				alerIconElement?.classList.add("WarningIcon");
				alertLabelElement?.classList.add("WarningLabel");

				setTimeout(function () {
					alertDivContainerElement?.classList.remove("displayWarning");
					alerIconElement?.classList.remove("WarningIcon");
					alertLabelElement?.classList.remove("WarningLabel");
				}, timmerAlert);

				break;
			case "Success":
				alertDivContainerElement?.classList.add("displaySuccess");
				alerIconElement?.classList.add("SuccessIcon");
				alertLabelElement?.classList.add("SuccesLabel");

				setTimeout(function () {
					alertDivContainerElement?.classList.remove("displaySuccess");
					alerIconElement?.classList.remove("SuccessIcon");
					alertLabelElement?.classList.remove("SuccesLabel");
				}, timmerAlert);

				break;
			case "ProcessingServer":
				alertDivContainerElement?.classList.add("displaySuccess");
				alerIconElement?.classList.add("ProcessingServerIcon");
				alertLabelElement?.classList.add("SuccesLabel");

				setTimeout(function () {
					alertDivContainerElement?.classList.remove("displaySuccess");
					alerIconElement?.classList.remove("ProcessingServerIcon");
					alertLabelElement?.classList.remove("SuccesLabel");
				}, timmerAlert);

				break;
			case "Error":
				alertDivContainerElement?.classList.add("displayError");
				alerIconElement?.classList.add("ErrorIcon");
				alertLabelElement?.classList.add("ErrorLabel");

				setTimeout(function () {
					alertDivContainerElement?.classList.remove("displayError");
					alerIconElement?.classList.remove("ErrorIcon");
					alertLabelElement?.classList.remove("ErrorLabel");
				}, timmerAlert);

				break;
		}

	}

	private renderDivControlsElement( divClass : string): HTMLDivElement {
		const div: HTMLDivElement = document.createElement("div");
		div.classList.add(divClass);
		return div;
	}

	

	private static renderPCIPalIFrame(iframeClass: string): HTMLIFrameElement {
		const iFrameElement: HTMLIFrameElement = document.createElement("iframe");
		iFrameElement.setAttribute("class", "paymentFlowIframe");
		iFrameElement.setAttribute("id", iframeClass);
		iFrameElement.setAttribute("name", iframeClass);
		iFrameElement.setAttribute("frameborder", "0");
		return iFrameElement;
	}

	private renderButtonElement(label: string, ops: string): HTMLButtonElement {
		const button: HTMLButtonElement = document.createElement("button");
		button.innerHTML = label;
		button.setAttribute("value", label);
		button.setAttribute("operation", ops);
		button.classList.add("ControlOps_ButtonClass");
		button.addEventListener("click", event => this.onButtonClick(event, this._sessionIFrameDiv));

		return button;
	}

	private onButtonClick(event: Event, selectedElement: HTMLDivElement) {
		const eventTarget: Element = event.target as Element;

		if (eventTarget) {
			// Get the label and the selected attributes from the button element that was clicked
			const opsLabel: string = eventTarget.attributes.getNamedItem("value")?.value ?? "";
			const opsType: string = eventTarget?.attributes.getNamedItem("operation")?.value ?? "";

			this.tryGetClientURLfromXRMContext();
			this.tryGetIncidentIDfromXRMContext();

			if (this._PCIPal_Environment_Val && this._PCIPal_Region_Val && this._PCIPal_TenantID_Val) {
				this.triggerPCIPalResquestSesion(this._sessionIFrameDiv, opsType, this._PCIPal_Region_Val, this._PCIPal_Environment_Val);
				PCIPalIframe.displayAlertNotification("ProcessingServer", 7000, "The request is being processed.");
			} else {
				let errorMsj = this._context.resources.getString("Error_sc1");
				let evText: string = this._PCIPal_Environment_Val != null ? "Defined" : "No defined";
				let reText: string = this._PCIPal_Region_Val != null ? "Defined" : "No defined";
				let teText: string = this._PCIPal_TenantID_Val != null ? "Defined" : "No defined";

				errorMsj = errorMsj.replace("<1>", evText).replace("<2>", reText).replace("<3>", teText);
				PCIPalIframe.displayAlertNotification("Error", 9000, errorMsj);
			}

		}
	}

	private tryGetClientURLfromXRMContext() {
		try {
			this._clientInstanceURL = (<any>this._context).page.getClientUrl();
		}
		catch (ex) {
			this._clientInstanceURL = this._context.parameters.api_url_instance_name.raw;
		}
	}

	private tryGetIncidentIDfromXRMContext() {
		try {
			this._incidentID = (<any>this._context).page.entityId;
		}
		catch (ex) {
			this._incidentID = this._context.parameters.api_url_instance_name.raw;
		}
	}

	private async GetandSetEnvironmentVariableValue(schemaName: String) {
		let results = await this._context.webAPI.retrieveMultipleRecords("environmentvariabledefinition", `?$filter=schemaname eq '${schemaName}'&$select=environmentvariabledefinitionid&$expand=environmentvariabledefinition_environmentvariablevalue($select=value)`);
		
		if (!results || !results.entities || results.entities.length < 1) {
			return null;
		}
			 
		let variable = results.entities[0];

		if (!variable.environmentvariabledefinition_environmentvariablevalue || variable.environmentvariabledefinition_environmentvariablevalue.length < 1) {
			return null;
		} 

		this.SetEnvironmentVariable(schemaName, variable.environmentvariabledefinition_environmentvariablevalue[0].value);

		return variable.environmentvariabledefinition_environmentvariablevalue[0].value;
	}

	private SetEnvironmentVariable(schemaName: String, EV_val : String | null) {

		switch (schemaName) {
			case PCIPal_Environment_EVConstValName:
				this._PCIPal_Environment_Val = EV_val;
				break;
			case PCIPal_Region_EVConstValName:
				this._PCIPal_Region_Val = EV_val;
				break;
			case PCIPal_TenantID_EVConstValName:
				this._PCIPal_TenantID_Val = EV_val;
				break;
			default:
				break;
		}
	}

	private triggerPCIPalResquestSesion(htmlElementRef: HTMLElement, OpsType :String, regionVal: String, environmentVal: String) {

		if (this._clientInstanceURL && this._incidentID) {
			try {
				//debugger;

				let PCIPal_SessionViewURL_temp = "https://" + this._PCIPal_Region_Val + "." + this._PCIPal_Environment_Val + "/session/" + this._PCIPal_TenantID_Val + "/view/<SessionId>/framed";

				let pr = new InputActionPArams();
				pr.IncidentID = this._incidentID;
				pr.OperationType = OpsType;

				let req = new XMLHttpRequest();
				req.open("POST", this._clientInstanceURL + "/api/data/v9.1/lulu_Action_PCIPalGenerate", true);
				req.setRequestHeader("OData-MaxVersion", "4.0");
				req.setRequestHeader("OData-Version", "4.0");
				req.setRequestHeader("Accept", "application/json");
				req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
				//req.setRequestHeader("MSCRMCallerID", "ED1E6F9B-B3B8-EB11-8236-000D3A595DD5");
				req.onreadystatechange = function () {
					if (this.readyState === 4) {
						req.onreadystatechange = null;
						if (this.status === 200) {
							let results = JSON.parse(this.response);
							let accessTokenResult = results.AccessToken;
							let refreshTokenResult = results.RefreshToken;
							let sessionID = results.SessionID;  

							let PCIPal_sessionViewURL = PCIPal_SessionViewURL_temp.replace("<SessionId>", sessionID??"X");
							var form = document.createElement('form');
							form.setAttribute('action', PCIPal_sessionViewURL);
							form.setAttribute('id', PCIPal_form_html_element_ID);
							form.setAttribute('method', 'post');
							form.setAttribute('target', PCIPal_iframe_element_ID);

							let xBearerToken = document.createElement('input');
							xBearerToken.setAttribute('type', 'hidden');
							xBearerToken.setAttribute('name', 'X-BEARER-TOKEN');
							xBearerToken.setAttribute('value', accessTokenResult??"X");

							let xRefreshToken = document.createElement('input');
							xRefreshToken.setAttribute('type', 'hidden');
							xRefreshToken.setAttribute('name', 'X-REFRESH-TOKEN');
							xRefreshToken.setAttribute('value', refreshTokenResult??"X");

							form.appendChild(xBearerToken);
							form.appendChild(xRefreshToken);

							let formElement = document.getElementById(PCIPal_form_html_element_ID);
							if (typeof (formElement) != 'undefined' && formElement != null) {
								htmlElementRef.removeChild(formElement);
								htmlElementRef.appendChild(form);
							} else {
								htmlElementRef.appendChild(form);
							}

							let iframeForSession = PCIPalIframe.renderPCIPalIFrame(PCIPal_iframe_element_ID);

							let iframeElement = document.getElementById(PCIPal_iframe_element_ID);
							if (typeof (iframeElement) != 'undefined' && iframeElement != null) {
								htmlElementRef.removeChild(iframeElement);
								htmlElementRef.appendChild(iframeForSession);
							} else {
								htmlElementRef.appendChild(iframeForSession);
							}

							form.submit();

							PCIPalIframe.connectWebSocket(regionVal + "." + environmentVal, accessTokenResult, sessionID);

						} else {
							let errorMsjlog: String = req.responseText.replace(new RegExp('\r?\n', 'g'), '<br />');
							PCIPalIframe.displayAlertNotification("Error", 9000, "Error: The XMLHttpRequest was not fulfilled, status resume: " + req.status + ":" + req.statusText + " - " + errorMsjlog);
						}
					}
				};
				req.send(JSON.stringify(pr));
			} catch (error) {
				let errorMsj = this._context.resources.getString("Error_sc3");
				errorMsj = errorMsj + error.message;
				PCIPalIframe.displayAlertNotification("Error", 9000, errorMsj);
			}

		} else {
			let errorMsj = this._context.resources.getString("Error_sc2");
			let instanceUrl: string = this._clientInstanceURL != null ? "Defined" : "No defined";
			let incidentID: string = this._incidentID != null ? "Defined" : "No defined";

			errorMsj = errorMsj.replace("<1>", instanceUrl).replace("<2>", incidentID);
			PCIPalIframe.displayAlertNotification("Error", 9000, errorMsj);
		}
	}

	private static connectWebSocket(enviroment: string, bearerToken: String, sessionId: String): void {
		var ws = new WebSocket('wss://' + enviroment + '/socket');

		ws.onopen = function (event: any) {
			let socket = ws;

			if (bearerToken && sessionId) {
				socket.send(JSON.stringify({
					type: "auth",
					bearer: bearerToken
				}));

				socket.send(JSON.stringify({
					type: 'websession',
					register: sessionId,
					fullStatus: true
				}));

				// Send a message to the web stocket at a determined interval to keep it alive.
				setInterval(function preventInitialInactivityTimeoutOnSocket() {
					socket.send('{}');
				}, 58000);
			} else {
				console.log('Authentication information not provided.')
				socket.close();
			}
		};
		ws.onmessage = function (event: any): void {
			console.log('Message Received from WebSocket:')
			console.log(event.data);
		};
		ws.onerror = function (event: any): void {
			console.log(JSON.stringify(event.data));
		};
		ws.onclose = function (event: any): void {
			console.log(JSON.stringify(event.data));
		};
	}


}

class InputActionPArams {
	constructor() {}
	public IncidentID: String;
	public OperationType: String;
}
