// https://www.terraform.io/docs/providers/boundary/r/target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of brokered credential source ID's.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/target#brokered_credential_source_ids Target#brokered_credential_source_ids}
  */
  readonly brokeredCredentialSourceIds?: string[];
  /**
  * The default port for this target.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/target#default_port Target#default_port}
  */
  readonly defaultPort?: number;
  /**
  * The target description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/target#description Target#description}
  */
  readonly description?: string;
  /**
  * A list of host source ID's.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/target#host_source_ids Target#host_source_ids}
  */
  readonly hostSourceIds?: string[];
  /**
  * A list of injected application credential source ID's.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/target#injected_application_credential_source_ids Target#injected_application_credential_source_ids}
  */
  readonly injectedApplicationCredentialSourceIds?: string[];
  /**
  * The target name. Defaults to the resource name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/target#name Target#name}
  */
  readonly name?: string;
  /**
  * The scope ID in which the resource is created. Defaults to the provider's `default_scope` if unset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/target#scope_id Target#scope_id}
  */
  readonly scopeId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/target#session_connection_limit Target#session_connection_limit}
  */
  readonly sessionConnectionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/target#session_max_seconds Target#session_max_seconds}
  */
  readonly sessionMaxSeconds?: number;
  /**
  * The target resource type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/target#type Target#type}
  */
  readonly type: string;
  /**
  * Boolean expression to filter the workers for this target
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/target#worker_filter Target#worker_filter}
  */
  readonly workerFilter?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/boundary/r/target boundary_target}
*/
export class Target extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_target";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/boundary/r/target boundary_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetConfig
  */
  public constructor(scope: Construct, id: string, config: TargetConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_target',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.1.3',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._brokeredCredentialSourceIds = config.brokeredCredentialSourceIds;
    this._defaultPort = config.defaultPort;
    this._description = config.description;
    this._hostSourceIds = config.hostSourceIds;
    this._injectedApplicationCredentialSourceIds = config.injectedApplicationCredentialSourceIds;
    this._name = config.name;
    this._scopeId = config.scopeId;
    this._sessionConnectionLimit = config.sessionConnectionLimit;
    this._sessionMaxSeconds = config.sessionMaxSeconds;
    this._type = config.type;
    this._workerFilter = config.workerFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // brokered_credential_source_ids - computed: false, optional: true, required: false
  private _brokeredCredentialSourceIds?: string[]; 
  public get brokeredCredentialSourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('brokered_credential_source_ids'));
  }
  public set brokeredCredentialSourceIds(value: string[]) {
    this._brokeredCredentialSourceIds = value;
  }
  public resetBrokeredCredentialSourceIds() {
    this._brokeredCredentialSourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokeredCredentialSourceIdsInput() {
    return this._brokeredCredentialSourceIds;
  }

  // default_port - computed: false, optional: true, required: false
  private _defaultPort?: number; 
  public get defaultPort() {
    return this.getNumberAttribute('default_port');
  }
  public set defaultPort(value: number) {
    this._defaultPort = value;
  }
  public resetDefaultPort() {
    this._defaultPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPortInput() {
    return this._defaultPort;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // host_source_ids - computed: false, optional: true, required: false
  private _hostSourceIds?: string[]; 
  public get hostSourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_source_ids'));
  }
  public set hostSourceIds(value: string[]) {
    this._hostSourceIds = value;
  }
  public resetHostSourceIds() {
    this._hostSourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSourceIdsInput() {
    return this._hostSourceIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // injected_application_credential_source_ids - computed: false, optional: true, required: false
  private _injectedApplicationCredentialSourceIds?: string[]; 
  public get injectedApplicationCredentialSourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('injected_application_credential_source_ids'));
  }
  public set injectedApplicationCredentialSourceIds(value: string[]) {
    this._injectedApplicationCredentialSourceIds = value;
  }
  public resetInjectedApplicationCredentialSourceIds() {
    this._injectedApplicationCredentialSourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectedApplicationCredentialSourceIdsInput() {
    return this._injectedApplicationCredentialSourceIds;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scope_id - computed: false, optional: false, required: true
  private _scopeId?: string; 
  public get scopeId() {
    return this.getStringAttribute('scope_id');
  }
  public set scopeId(value: string) {
    this._scopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId;
  }

  // session_connection_limit - computed: true, optional: true, required: false
  private _sessionConnectionLimit?: number; 
  public get sessionConnectionLimit() {
    return this.getNumberAttribute('session_connection_limit');
  }
  public set sessionConnectionLimit(value: number) {
    this._sessionConnectionLimit = value;
  }
  public resetSessionConnectionLimit() {
    this._sessionConnectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionConnectionLimitInput() {
    return this._sessionConnectionLimit;
  }

  // session_max_seconds - computed: true, optional: true, required: false
  private _sessionMaxSeconds?: number; 
  public get sessionMaxSeconds() {
    return this.getNumberAttribute('session_max_seconds');
  }
  public set sessionMaxSeconds(value: number) {
    this._sessionMaxSeconds = value;
  }
  public resetSessionMaxSeconds() {
    this._sessionMaxSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMaxSecondsInput() {
    return this._sessionMaxSeconds;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // worker_filter - computed: false, optional: true, required: false
  private _workerFilter?: string; 
  public get workerFilter() {
    return this.getStringAttribute('worker_filter');
  }
  public set workerFilter(value: string) {
    this._workerFilter = value;
  }
  public resetWorkerFilter() {
    this._workerFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerFilterInput() {
    return this._workerFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      brokered_credential_source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._brokeredCredentialSourceIds),
      default_port: cdktf.numberToTerraform(this._defaultPort),
      description: cdktf.stringToTerraform(this._description),
      host_source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostSourceIds),
      injected_application_credential_source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._injectedApplicationCredentialSourceIds),
      name: cdktf.stringToTerraform(this._name),
      scope_id: cdktf.stringToTerraform(this._scopeId),
      session_connection_limit: cdktf.numberToTerraform(this._sessionConnectionLimit),
      session_max_seconds: cdktf.numberToTerraform(this._sessionMaxSeconds),
      type: cdktf.stringToTerraform(this._type),
      worker_filter: cdktf.stringToTerraform(this._workerFilter),
    };
  }
}
