// https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/storage_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * The attributes for the storage bucket. The "region" attribute field is required when creating an AWS storage bucket. Values are either encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/storage_bucket#attributes_json StorageBucket#attributes_json}
  */
  readonly attributesJson?: string;
  /**
  * The name of the bucket within the external object store service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/storage_bucket#bucket_name StorageBucket#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The prefix used to organize the data held within the external object store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/storage_bucket#bucket_prefix StorageBucket#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * The storage bucket description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/storage_bucket#description StorageBucket#description}
  */
  readonly description?: string;
  /**
  * The storage bucket name. Defaults to the resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/storage_bucket#name StorageBucket#name}
  */
  readonly name?: string;
  /**
  * The ID of the plugin that should back the resource. This or plugin_name must be defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/storage_bucket#plugin_id StorageBucket#plugin_id}
  */
  readonly pluginId?: string;
  /**
  * The name of the plugin that should back the resource. This or plugin_id must be defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/storage_bucket#plugin_name StorageBucket#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * The scope for this storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/storage_bucket#scope_id StorageBucket#scope_id}
  */
  readonly scopeId: string;
  /**
  * The secrets for the storage bucket. Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" to clear any existing values. NOTE: Unlike "attributes_json", removing this block will NOT clear secrets from the storage bucket; this allows injecting secrets for one call, then removing them for storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/storage_bucket#secrets_json StorageBucket#secrets_json}
  */
  readonly secretsJson?: string;
  /**
  * Filters to the worker(s) that can handle requests for this storage bucket. The filter must match an existing worker in order to create a storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/storage_bucket#worker_filter StorageBucket#worker_filter}
  */
  readonly workerFilter: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/storage_bucket boundary_storage_bucket}
*/
export class StorageBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_storage_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageBucket to import
  * @param importFromId The id of the existing StorageBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/storage_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "boundary_storage_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/storage_bucket boundary_storage_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageBucketConfig
  */
  public constructor(scope: Construct, id: string, config: StorageBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_storage_bucket',
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
    this._attributesJson = config.attributesJson;
    this._bucketName = config.bucketName;
    this._bucketPrefix = config.bucketPrefix;
    this._description = config.description;
    this._name = config.name;
    this._pluginId = config.pluginId;
    this._pluginName = config.pluginName;
    this._scopeId = config.scopeId;
    this._secretsJson = config.secretsJson;
    this._workerFilter = config.workerFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes_json - computed: false, optional: true, required: false
  private _attributesJson?: string; 
  public get attributesJson() {
    return this.getStringAttribute('attributes_json');
  }
  public set attributesJson(value: string) {
    this._attributesJson = value;
  }
  public resetAttributesJson() {
    this._attributesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesJsonInput() {
    return this._attributesJson;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_force_update - computed: true, optional: false, required: false
  public get internalForceUpdate() {
    return this.getStringAttribute('internal_force_update');
  }

  // internal_hmac_used_for_secrets_config_hmac - computed: true, optional: false, required: false
  public get internalHmacUsedForSecretsConfigHmac() {
    return this.getStringAttribute('internal_hmac_used_for_secrets_config_hmac');
  }

  // internal_secrets_config_hmac - computed: true, optional: false, required: false
  public get internalSecretsConfigHmac() {
    return this.getStringAttribute('internal_secrets_config_hmac');
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

  // plugin_id - computed: true, optional: true, required: false
  private _pluginId?: string; 
  public get pluginId() {
    return this.getStringAttribute('plugin_id');
  }
  public set pluginId(value: string) {
    this._pluginId = value;
  }
  public resetPluginId() {
    this._pluginId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginIdInput() {
    return this._pluginId;
  }

  // plugin_name - computed: false, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
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

  // secrets_hmac - computed: true, optional: false, required: false
  public get secretsHmac() {
    return this.getStringAttribute('secrets_hmac');
  }

  // secrets_json - computed: false, optional: true, required: false
  private _secretsJson?: string; 
  public get secretsJson() {
    return this.getStringAttribute('secrets_json');
  }
  public set secretsJson(value: string) {
    this._secretsJson = value;
  }
  public resetSecretsJson() {
    this._secretsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsJsonInput() {
    return this._secretsJson;
  }

  // worker_filter - computed: false, optional: false, required: true
  private _workerFilter?: string; 
  public get workerFilter() {
    return this.getStringAttribute('worker_filter');
  }
  public set workerFilter(value: string) {
    this._workerFilter = value;
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
      attributes_json: cdktf.stringToTerraform(this._attributesJson),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      plugin_id: cdktf.stringToTerraform(this._pluginId),
      plugin_name: cdktf.stringToTerraform(this._pluginName),
      scope_id: cdktf.stringToTerraform(this._scopeId),
      secrets_json: cdktf.stringToTerraform(this._secretsJson),
      worker_filter: cdktf.stringToTerraform(this._workerFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes_json: {
        value: cdktf.stringToHclTerraform(this._attributesJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_prefix: {
        value: cdktf.stringToHclTerraform(this._bucketPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_id: {
        value: cdktf.stringToHclTerraform(this._pluginId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_name: {
        value: cdktf.stringToHclTerraform(this._pluginName),
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
      secrets_json: {
        value: cdktf.stringToHclTerraform(this._secretsJson),
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
