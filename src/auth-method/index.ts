// https://www.terraform.io/docs/providers/boundary/r/auth_method
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthMethodConfig extends cdktf.TerraformMetaArguments {
  /**
  * The auth method description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method#description AuthMethod#description}
  */
  readonly description?: string;
  /**
  * The minimum login name length.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method#min_login_name_length AuthMethod#min_login_name_length}
  */
  readonly minLoginNameLength?: number;
  /**
  * The minimum password length.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method#min_password_length AuthMethod#min_password_length}
  */
  readonly minPasswordLength?: number;
  /**
  * The auth method name. Defaults to the resource name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method#name AuthMethod#name}
  */
  readonly name?: string;
  /**
  * The scope ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method#scope_id AuthMethod#scope_id}
  */
  readonly scopeId: string;
  /**
  * The resource type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/auth_method#type AuthMethod#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/boundary/r/auth_method boundary_auth_method}
*/
export class AuthMethod extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_auth_method";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/boundary/r/auth_method boundary_auth_method} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthMethodConfig
  */
  public constructor(scope: Construct, id: string, config: AuthMethodConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_auth_method',
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
    this._description = config.description;
    this._minLoginNameLength = config.minLoginNameLength;
    this._minPasswordLength = config.minPasswordLength;
    this._name = config.name;
    this._scopeId = config.scopeId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // min_login_name_length - computed: true, optional: true, required: false
  private _minLoginNameLength?: number; 
  public get minLoginNameLength() {
    return this.getNumberAttribute('min_login_name_length');
  }
  public set minLoginNameLength(value: number) {
    this._minLoginNameLength = value;
  }
  public resetMinLoginNameLength() {
    this._minLoginNameLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLoginNameLengthInput() {
    return this._minLoginNameLength;
  }

  // min_password_length - computed: true, optional: true, required: false
  private _minPasswordLength?: number; 
  public get minPasswordLength() {
    return this.getNumberAttribute('min_password_length');
  }
  public set minPasswordLength(value: number) {
    this._minPasswordLength = value;
  }
  public resetMinPasswordLength() {
    this._minPasswordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPasswordLengthInput() {
    return this._minPasswordLength;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      min_login_name_length: cdktf.numberToTerraform(this._minLoginNameLength),
      min_password_length: cdktf.numberToTerraform(this._minPasswordLength),
      name: cdktf.stringToTerraform(this._name),
      scope_id: cdktf.stringToTerraform(this._scopeId),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
