// https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/managed_group_ldap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedGroupLdapConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource ID for the auth method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/managed_group_ldap#auth_method_id ManagedGroupLdap#auth_method_id}
  */
  readonly authMethodId: string;
  /**
  * The managed group description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/managed_group_ldap#description ManagedGroupLdap#description}
  */
  readonly description?: string;
  /**
  * The list of groups that make up the managed group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/managed_group_ldap#group_names ManagedGroupLdap#group_names}
  */
  readonly groupNames: string[];
  /**
  * The managed group name. Defaults to the resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/managed_group_ldap#name ManagedGroupLdap#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/managed_group_ldap boundary_managed_group_ldap}
*/
export class ManagedGroupLdap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_managed_group_ldap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedGroupLdap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedGroupLdap to import
  * @param importFromId The id of the existing ManagedGroupLdap that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/managed_group_ldap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedGroupLdap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "boundary_managed_group_ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/managed_group_ldap boundary_managed_group_ldap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedGroupLdapConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedGroupLdapConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_managed_group_ldap',
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
    this._authMethodId = config.authMethodId;
    this._description = config.description;
    this._groupNames = config.groupNames;
    this._name = config.name;
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

  // group_names - computed: false, optional: false, required: true
  private _groupNames?: string[]; 
  public get groupNames() {
    return this.getListAttribute('group_names');
  }
  public set groupNames(value: string[]) {
    this._groupNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNamesInput() {
    return this._groupNames;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_method_id: cdktf.stringToTerraform(this._authMethodId),
      description: cdktf.stringToTerraform(this._description),
      group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupNames),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
