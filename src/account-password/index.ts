/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/account_password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountPasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource ID for the auth method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/account_password#auth_method_id AccountPassword#auth_method_id}
  */
  readonly authMethodId: string;
  /**
  * The account description.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/account_password#description AccountPassword#description}
  */
  readonly description?: string;
  /**
  * The login name for this account.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/account_password#login_name AccountPassword#login_name}
  */
  readonly loginName?: string;
  /**
  * The account name. Defaults to the resource name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/account_password#name AccountPassword#name}
  */
  readonly name?: string;
  /**
  * The account password. Only set on create, changes will not be reflected when updating account.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/account_password#password AccountPassword#password}
  */
  readonly password?: string;
  /**
  * The resource type.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/account_password#type AccountPassword#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/account_password boundary_account_password}
*/
export class AccountPassword extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_account_password";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/account_password boundary_account_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountPasswordConfig
  */
  public constructor(scope: Construct, id: string, config: AccountPasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_account_password',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.1.8',
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
    this._authMethodId = config.authMethodId;
    this._description = config.description;
    this._loginName = config.loginName;
    this._name = config.name;
    this._password = config.password;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_method_id - computed: false, optional: false, required: true
  private _authMethodId?: string; 
  public get authMethodId() {
    return this.getStringAttribute('auth_method_id');
  }
  public set authMethodId(value: string) {
    this._authMethodId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodIdInput() {
    return this._authMethodId;
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

  // login_name - computed: false, optional: true, required: false
  private _loginName?: string; 
  public get loginName() {
    return this.getStringAttribute('login_name');
  }
  public set loginName(value: string) {
    this._loginName = value;
  }
  public resetLoginName() {
    this._loginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNameInput() {
    return this._loginName;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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
      auth_method_id: cdktf.stringToTerraform(this._authMethodId),
      description: cdktf.stringToTerraform(this._description),
      login_name: cdktf.stringToTerraform(this._loginName),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
