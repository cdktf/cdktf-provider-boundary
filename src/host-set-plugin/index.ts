// https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/host_set_plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostSetPluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * The attributes for the host set. Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the host set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/host_set_plugin#attributes_json HostSetPlugin#attributes_json}
  */
  readonly attributesJson?: string;
  /**
  * The host set description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/host_set_plugin#description HostSetPlugin#description}
  */
  readonly description?: string;
  /**
  * The catalog for the host set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/host_set_plugin#host_catalog_id HostSetPlugin#host_catalog_id}
  */
  readonly hostCatalogId: string;
  /**
  * The host set name. Defaults to the resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/host_set_plugin#name HostSetPlugin#name}
  */
  readonly name?: string;
  /**
  * The ordered list of preferred endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/host_set_plugin#preferred_endpoints HostSetPlugin#preferred_endpoints}
  */
  readonly preferredEndpoints?: string[];
  /**
  * The value to set for the sync interval seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/host_set_plugin#sync_interval_seconds HostSetPlugin#sync_interval_seconds}
  */
  readonly syncIntervalSeconds?: number;
  /**
  * The type of host set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/host_set_plugin#type HostSetPlugin#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/host_set_plugin boundary_host_set_plugin}
*/
export class HostSetPlugin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_host_set_plugin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostSetPlugin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostSetPlugin to import
  * @param importFromId The id of the existing HostSetPlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/host_set_plugin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostSetPlugin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "boundary_host_set_plugin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/host_set_plugin boundary_host_set_plugin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostSetPluginConfig
  */
  public constructor(scope: Construct, id: string, config: HostSetPluginConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_host_set_plugin',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.1.12',
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
    this._description = config.description;
    this._hostCatalogId = config.hostCatalogId;
    this._name = config.name;
    this._preferredEndpoints = config.preferredEndpoints;
    this._syncIntervalSeconds = config.syncIntervalSeconds;
    this._type = config.type;
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

  // host_catalog_id - computed: false, optional: false, required: true
  private _hostCatalogId?: string; 
  public get hostCatalogId() {
    return this.getStringAttribute('host_catalog_id');
  }
  public set hostCatalogId(value: string) {
    this._hostCatalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostCatalogIdInput() {
    return this._hostCatalogId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // preferred_endpoints - computed: false, optional: true, required: false
  private _preferredEndpoints?: string[]; 
  public get preferredEndpoints() {
    return this.getListAttribute('preferred_endpoints');
  }
  public set preferredEndpoints(value: string[]) {
    this._preferredEndpoints = value;
  }
  public resetPreferredEndpoints() {
    this._preferredEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredEndpointsInput() {
    return this._preferredEndpoints;
  }

  // sync_interval_seconds - computed: false, optional: true, required: false
  private _syncIntervalSeconds?: number; 
  public get syncIntervalSeconds() {
    return this.getNumberAttribute('sync_interval_seconds');
  }
  public set syncIntervalSeconds(value: number) {
    this._syncIntervalSeconds = value;
  }
  public resetSyncIntervalSeconds() {
    this._syncIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIntervalSecondsInput() {
    return this._syncIntervalSeconds;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes_json: cdktf.stringToTerraform(this._attributesJson),
      description: cdktf.stringToTerraform(this._description),
      host_catalog_id: cdktf.stringToTerraform(this._hostCatalogId),
      name: cdktf.stringToTerraform(this._name),
      preferred_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredEndpoints),
      sync_interval_seconds: cdktf.numberToTerraform(this._syncIntervalSeconds),
      type: cdktf.stringToTerraform(this._type),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_catalog_id: {
        value: cdktf.stringToHclTerraform(this._hostCatalogId),
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
      preferred_endpoints: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredEndpoints),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sync_interval_seconds: {
        value: cdktf.numberToHclTerraform(this._syncIntervalSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
