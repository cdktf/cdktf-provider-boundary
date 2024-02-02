/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optionally, a valid network address to connect to for this target. Cannot be used alongside host_source_ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#address Target#address}
  */
  readonly address?: string;
  /**
  * A list of brokered credential source ID's.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#brokered_credential_source_ids Target#brokered_credential_source_ids}
  */
  readonly brokeredCredentialSourceIds?: string[];
  /**
  * The default client port for this target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#default_client_port Target#default_client_port}
  */
  readonly defaultClientPort?: number;
  /**
  * The default port for this target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#default_port Target#default_port}
  */
  readonly defaultPort?: number;
  /**
  * The target description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#description Target#description}
  */
  readonly description?: string;
  /**
  * Boolean expression to filter the workers used to access this target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#egress_worker_filter Target#egress_worker_filter}
  */
  readonly egressWorkerFilter?: string;
  /**
  * HCP/Ent Only. Enable sessions recording for this target. Only applicable for SSH targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#enable_session_recording Target#enable_session_recording}
  */
  readonly enableSessionRecording?: boolean | cdktf.IResolvable;
  /**
  * A list of host source ID's. Cannot be used alongside address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#host_source_ids Target#host_source_ids}
  */
  readonly hostSourceIds?: string[];
  /**
  * HCP Only. Boolean expression to filter the workers a user will connect to when initiating a session against this target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#ingress_worker_filter Target#ingress_worker_filter}
  */
  readonly ingressWorkerFilter?: string;
  /**
  * A list of injected application credential source ID's.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#injected_application_credential_source_ids Target#injected_application_credential_source_ids}
  */
  readonly injectedApplicationCredentialSourceIds?: string[];
  /**
  * The target name. Defaults to the resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#name Target#name}
  */
  readonly name?: string;
  /**
  * The scope ID in which the resource is created. Defaults to the provider's `default_scope` if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#scope_id Target#scope_id}
  */
  readonly scopeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#session_connection_limit Target#session_connection_limit}
  */
  readonly sessionConnectionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#session_max_seconds Target#session_max_seconds}
  */
  readonly sessionMaxSeconds?: number;
  /**
  * HCP/Ent Only. Storage bucket for this target. Only applicable for SSH targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#storage_bucket_id Target#storage_bucket_id}
  */
  readonly storageBucketId?: string;
  /**
  * The target resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#type Target#type}
  */
  readonly type: string;
  /**
  * Boolean expression to filter the workers for this target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#worker_filter Target#worker_filter}
  */
  readonly workerFilter?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target boundary_target}
*/
export class Target extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Target resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Target to import
  * @param importFromId The id of the existing Target that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Target to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "boundary_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/target boundary_target} Resource
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
        providerVersion: '1.1.13',
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
    this._address = config.address;
    this._brokeredCredentialSourceIds = config.brokeredCredentialSourceIds;
    this._defaultClientPort = config.defaultClientPort;
    this._defaultPort = config.defaultPort;
    this._description = config.description;
    this._egressWorkerFilter = config.egressWorkerFilter;
    this._enableSessionRecording = config.enableSessionRecording;
    this._hostSourceIds = config.hostSourceIds;
    this._ingressWorkerFilter = config.ingressWorkerFilter;
    this._injectedApplicationCredentialSourceIds = config.injectedApplicationCredentialSourceIds;
    this._name = config.name;
    this._scopeId = config.scopeId;
    this._sessionConnectionLimit = config.sessionConnectionLimit;
    this._sessionMaxSeconds = config.sessionMaxSeconds;
    this._storageBucketId = config.storageBucketId;
    this._type = config.type;
    this._workerFilter = config.workerFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

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

  // default_client_port - computed: false, optional: true, required: false
  private _defaultClientPort?: number; 
  public get defaultClientPort() {
    return this.getNumberAttribute('default_client_port');
  }
  public set defaultClientPort(value: number) {
    this._defaultClientPort = value;
  }
  public resetDefaultClientPort() {
    this._defaultClientPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultClientPortInput() {
    return this._defaultClientPort;
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

  // egress_worker_filter - computed: false, optional: true, required: false
  private _egressWorkerFilter?: string; 
  public get egressWorkerFilter() {
    return this.getStringAttribute('egress_worker_filter');
  }
  public set egressWorkerFilter(value: string) {
    this._egressWorkerFilter = value;
  }
  public resetEgressWorkerFilter() {
    this._egressWorkerFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressWorkerFilterInput() {
    return this._egressWorkerFilter;
  }

  // enable_session_recording - computed: false, optional: true, required: false
  private _enableSessionRecording?: boolean | cdktf.IResolvable; 
  public get enableSessionRecording() {
    return this.getBooleanAttribute('enable_session_recording');
  }
  public set enableSessionRecording(value: boolean | cdktf.IResolvable) {
    this._enableSessionRecording = value;
  }
  public resetEnableSessionRecording() {
    this._enableSessionRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSessionRecordingInput() {
    return this._enableSessionRecording;
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

  // ingress_worker_filter - computed: false, optional: true, required: false
  private _ingressWorkerFilter?: string; 
  public get ingressWorkerFilter() {
    return this.getStringAttribute('ingress_worker_filter');
  }
  public set ingressWorkerFilter(value: string) {
    this._ingressWorkerFilter = value;
  }
  public resetIngressWorkerFilter() {
    this._ingressWorkerFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressWorkerFilterInput() {
    return this._ingressWorkerFilter;
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

  // storage_bucket_id - computed: false, optional: true, required: false
  private _storageBucketId?: string; 
  public get storageBucketId() {
    return this.getStringAttribute('storage_bucket_id');
  }
  public set storageBucketId(value: string) {
    this._storageBucketId = value;
  }
  public resetStorageBucketId() {
    this._storageBucketId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBucketIdInput() {
    return this._storageBucketId;
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
      address: cdktf.stringToTerraform(this._address),
      brokered_credential_source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._brokeredCredentialSourceIds),
      default_client_port: cdktf.numberToTerraform(this._defaultClientPort),
      default_port: cdktf.numberToTerraform(this._defaultPort),
      description: cdktf.stringToTerraform(this._description),
      egress_worker_filter: cdktf.stringToTerraform(this._egressWorkerFilter),
      enable_session_recording: cdktf.booleanToTerraform(this._enableSessionRecording),
      host_source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostSourceIds),
      ingress_worker_filter: cdktf.stringToTerraform(this._ingressWorkerFilter),
      injected_application_credential_source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._injectedApplicationCredentialSourceIds),
      name: cdktf.stringToTerraform(this._name),
      scope_id: cdktf.stringToTerraform(this._scopeId),
      session_connection_limit: cdktf.numberToTerraform(this._sessionConnectionLimit),
      session_max_seconds: cdktf.numberToTerraform(this._sessionMaxSeconds),
      storage_bucket_id: cdktf.stringToTerraform(this._storageBucketId),
      type: cdktf.stringToTerraform(this._type),
      worker_filter: cdktf.stringToTerraform(this._workerFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      brokered_credential_source_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._brokeredCredentialSourceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_client_port: {
        value: cdktf.numberToHclTerraform(this._defaultClientPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_port: {
        value: cdktf.numberToHclTerraform(this._defaultPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_worker_filter: {
        value: cdktf.stringToHclTerraform(this._egressWorkerFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_session_recording: {
        value: cdktf.booleanToHclTerraform(this._enableSessionRecording),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_source_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostSourceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ingress_worker_filter: {
        value: cdktf.stringToHclTerraform(this._ingressWorkerFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      injected_application_credential_source_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._injectedApplicationCredentialSourceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_id: {
        value: cdktf.stringToHclTerraform(this._scopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_connection_limit: {
        value: cdktf.numberToHclTerraform(this._sessionConnectionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_max_seconds: {
        value: cdktf.numberToHclTerraform(this._sessionMaxSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_bucket_id: {
        value: cdktf.stringToHclTerraform(this._storageBucketId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_filter: {
        value: cdktf.stringToHclTerraform(this._workerFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
