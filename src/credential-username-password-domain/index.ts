/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialUsernamePasswordDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The credential store in which to save this username-password-domain credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#credential_store_id CredentialUsernamePasswordDomain#credential_store_id}
  */
  readonly credentialStoreId: string;
  /**
  * The description of this username-password-domain credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#description CredentialUsernamePasswordDomain#description}
  */
  readonly description?: string;
  /**
  * The domain of this username-password-domain credential. This field is required unless provided as part of the username field instead (see username field description).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#domain CredentialUsernamePasswordDomain#domain}
  */
  readonly domain?: string;
  /**
  * The name of this username-password-domain credential. Defaults to the resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#name CredentialUsernamePasswordDomain#name}
  */
  readonly name?: string;
  /**
  * The password of this username-password-domain credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#password CredentialUsernamePasswordDomain#password}
  */
  readonly password: string;
  /**
  * This field is required even though it is marked as optional. The username of this username-password-domain credential. Can also contain a domain if provided as username@domain or domain\username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#username CredentialUsernamePasswordDomain#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain boundary_credential_username_password_domain}
*/
export class CredentialUsernamePasswordDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_credential_username_password_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialUsernamePasswordDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialUsernamePasswordDomain to import
  * @param importFromId The id of the existing CredentialUsernamePasswordDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialUsernamePasswordDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "boundary_credential_username_password_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain boundary_credential_username_password_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialUsernamePasswordDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialUsernamePasswordDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_credential_username_password_domain',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.4.0',
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
    this._credentialStoreId = config.credentialStoreId;
    this._description = config.description;
    this._domain = config.domain;
    this._name = config.name;
    this._password = config.password;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_hmac - computed: true, optional: false, required: false
  public get passwordHmac() {
    return this.getStringAttribute('password_hmac');
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_store_id: cdktf.stringToTerraform(this._credentialStoreId),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_store_id: {
        value: cdktf.stringToHclTerraform(this._credentialStoreId),
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
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
