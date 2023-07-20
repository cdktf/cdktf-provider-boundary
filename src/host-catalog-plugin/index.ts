/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_catalog_plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostCatalogPluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * The attributes for the host catalog. Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the host catalog.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_catalog_plugin#attributes_json HostCatalogPlugin#attributes_json}
  */
  readonly attributesJson?: string;
  /**
  * The host catalog description.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_catalog_plugin#description HostCatalogPlugin#description}
  */
  readonly description?: string;
  /**
  * Internal only. Used to force update so that we can always check the value of secrets.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_catalog_plugin#internal_force_update HostCatalogPlugin#internal_force_update}
  */
  readonly internalForceUpdate?: string;
  /**
  * Internal only. The Boundary-provided HMAC used to calculate the current value of the HMAC'd config. Used for drift detection.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_catalog_plugin#internal_hmac_used_for_secrets_config_hmac HostCatalogPlugin#internal_hmac_used_for_secrets_config_hmac}
  */
  readonly internalHmacUsedForSecretsConfigHmac?: string;
  /**
  * Internal only. HMAC of (serverSecretsHmac + config secrets). Used for proper secrets handling.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_catalog_plugin#internal_secrets_config_hmac HostCatalogPlugin#internal_secrets_config_hmac}
  */
  readonly internalSecretsConfigHmac?: string;
  /**
  * The host catalog name. Defaults to the resource name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_catalog_plugin#name HostCatalogPlugin#name}
  */
  readonly name?: string;
  /**
  * The ID of the plugin that should back the resource. This or plugin_name must be defined.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_catalog_plugin#plugin_id HostCatalogPlugin#plugin_id}
  */
  readonly pluginId?: string;
  /**
  * The name of the plugin that should back the resource. This or plugin_id must be defined.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_catalog_plugin#plugin_name HostCatalogPlugin#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * The scope ID in which the resource is created.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_catalog_plugin#scope_id HostCatalogPlugin#scope_id}
  */
  readonly scopeId: string;
  /**
  * The HMAC'd secrets value returned from the server.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_catalog_plugin#secrets_hmac HostCatalogPlugin#secrets_hmac}
  */
  readonly secretsHmac?: string;
  /**
  * The secrets for the host catalog. Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" to clear any existing values. NOTE: Unlike "attributes_json", removing this block will NOT clear secrets from the host catalog; this allows injecting secrets for one call, then removing them for storage.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_catalog_plugin#secrets_json HostCatalogPlugin#secrets_json}
  */
  readonly secretsJson?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_catalog_plugin boundary_host_catalog_plugin}
*/
export class HostCatalogPlugin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_host_catalog_plugin";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_catalog_plugin boundary_host_catalog_plugin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostCatalogPluginConfig
  */
  public constructor(scope: Construct, id: string, config: HostCatalogPluginConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_host_catalog_plugin',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.1.9',
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
    this._internalForceUpdate = config.internalForceUpdate;
    this._internalHmacUsedForSecretsConfigHmac = config.internalHmacUsedForSecretsConfigHmac;
    this._internalSecretsConfigHmac = config.internalSecretsConfigHmac;
    this._name = config.name;
    this._pluginId = config.pluginId;
    this._pluginName = config.pluginName;
    this._scopeId = config.scopeId;
    this._secretsHmac = config.secretsHmac;
    this._secretsJson = config.secretsJson;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_force_update - computed: true, optional: true, required: false
  private _internalForceUpdate?: string; 
  public get internalForceUpdate() {
    return this.getStringAttribute('internal_force_update');
  }
  public set internalForceUpdate(value: string) {
    this._internalForceUpdate = value;
  }
  public resetInternalForceUpdate() {
    this._internalForceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalForceUpdateInput() {
    return this._internalForceUpdate;
  }

  // internal_hmac_used_for_secrets_config_hmac - computed: true, optional: true, required: false
  private _internalHmacUsedForSecretsConfigHmac?: string; 
  public get internalHmacUsedForSecretsConfigHmac() {
    return this.getStringAttribute('internal_hmac_used_for_secrets_config_hmac');
  }
  public set internalHmacUsedForSecretsConfigHmac(value: string) {
    this._internalHmacUsedForSecretsConfigHmac = value;
  }
  public resetInternalHmacUsedForSecretsConfigHmac() {
    this._internalHmacUsedForSecretsConfigHmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalHmacUsedForSecretsConfigHmacInput() {
    return this._internalHmacUsedForSecretsConfigHmac;
  }

  // internal_secrets_config_hmac - computed: true, optional: true, required: false
  private _internalSecretsConfigHmac?: string; 
  public get internalSecretsConfigHmac() {
    return this.getStringAttribute('internal_secrets_config_hmac');
  }
  public set internalSecretsConfigHmac(value: string) {
    this._internalSecretsConfigHmac = value;
  }
  public resetInternalSecretsConfigHmac() {
    this._internalSecretsConfigHmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalSecretsConfigHmacInput() {
    return this._internalSecretsConfigHmac;
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

  // plugin_name - computed: true, optional: true, required: false
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

  // secrets_hmac - computed: true, optional: true, required: false
  private _secretsHmac?: string; 
  public get secretsHmac() {
    return this.getStringAttribute('secrets_hmac');
  }
  public set secretsHmac(value: string) {
    this._secretsHmac = value;
  }
  public resetSecretsHmac() {
    this._secretsHmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsHmacInput() {
    return this._secretsHmac;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes_json: cdktf.stringToTerraform(this._attributesJson),
      description: cdktf.stringToTerraform(this._description),
      internal_force_update: cdktf.stringToTerraform(this._internalForceUpdate),
      internal_hmac_used_for_secrets_config_hmac: cdktf.stringToTerraform(this._internalHmacUsedForSecretsConfigHmac),
      internal_secrets_config_hmac: cdktf.stringToTerraform(this._internalSecretsConfigHmac),
      name: cdktf.stringToTerraform(this._name),
      plugin_id: cdktf.stringToTerraform(this._pluginId),
      plugin_name: cdktf.stringToTerraform(this._pluginName),
      scope_id: cdktf.stringToTerraform(this._scopeId),
      secrets_hmac: cdktf.stringToTerraform(this._secretsHmac),
      secrets_json: cdktf.stringToTerraform(this._secretsJson),
    };
  }
}
