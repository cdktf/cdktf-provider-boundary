/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialLibraryVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * The credential mapping override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#credential_mapping_overrides CredentialLibraryVault#credential_mapping_overrides}
  */
  readonly credentialMappingOverrides?: { [key: string]: string };
  /**
  * The ID of the credential store that this library belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#credential_store_id CredentialLibraryVault#credential_store_id}
  */
  readonly credentialStoreId: string;
  /**
  * The type of credential the library generates. Cannot be updated on an existing resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#credential_type CredentialLibraryVault#credential_type}
  */
  readonly credentialType?: string;
  /**
  * The Vault credential library description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#description CredentialLibraryVault#description}
  */
  readonly description?: string;
  /**
  * The HTTP method the library uses when requesting credentials from Vault. Defaults to 'GET'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#http_method CredentialLibraryVault#http_method}
  */
  readonly httpMethod?: string;
  /**
  * The body of the HTTP request the library sends to Vault when requesting credentials. Only valid if `http_method` is set to `POST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#http_request_body CredentialLibraryVault#http_request_body}
  */
  readonly httpRequestBody?: string;
  /**
  * The Vault credential library name. Defaults to the resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#name CredentialLibraryVault#name}
  */
  readonly name?: string;
  /**
  * The path in Vault to request credentials from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#path CredentialLibraryVault#path}
  */
  readonly path: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault boundary_credential_library_vault}
*/
export class CredentialLibraryVault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_credential_library_vault";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault boundary_credential_library_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialLibraryVaultConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialLibraryVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_credential_library_vault',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.1.10',
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
    this._credentialMappingOverrides = config.credentialMappingOverrides;
    this._credentialStoreId = config.credentialStoreId;
    this._credentialType = config.credentialType;
    this._description = config.description;
    this._httpMethod = config.httpMethod;
    this._httpRequestBody = config.httpRequestBody;
    this._name = config.name;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_mapping_overrides - computed: false, optional: true, required: false
  private _credentialMappingOverrides?: { [key: string]: string }; 
  public get credentialMappingOverrides() {
    return this.getStringMapAttribute('credential_mapping_overrides');
  }
  public set credentialMappingOverrides(value: { [key: string]: string }) {
    this._credentialMappingOverrides = value;
  }
  public resetCredentialMappingOverrides() {
    this._credentialMappingOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialMappingOverridesInput() {
    return this._credentialMappingOverrides;
  }

  // credential_store_id - computed: false, optional: false, required: true
  private _credentialStoreId?: string; 
  public get credentialStoreId() {
    return this.getStringAttribute('credential_store_id');
  }
  public set credentialStoreId(value: string) {
    this._credentialStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialStoreIdInput() {
    return this._credentialStoreId;
  }

  // credential_type - computed: false, optional: true, required: false
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  public resetCredentialType() {
    this._credentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
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

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // http_request_body - computed: false, optional: true, required: false
  private _httpRequestBody?: string; 
  public get httpRequestBody() {
    return this.getStringAttribute('http_request_body');
  }
  public set httpRequestBody(value: string) {
    this._httpRequestBody = value;
  }
  public resetHttpRequestBody() {
    this._httpRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestBodyInput() {
    return this._httpRequestBody;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_mapping_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(this._credentialMappingOverrides),
      credential_store_id: cdktf.stringToTerraform(this._credentialStoreId),
      credential_type: cdktf.stringToTerraform(this._credentialType),
      description: cdktf.stringToTerraform(this._description),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      http_request_body: cdktf.stringToTerraform(this._httpRequestBody),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
    };
  }
}
