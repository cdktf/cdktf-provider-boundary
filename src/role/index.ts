/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The role description.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/role#description Role#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/role#grant_scope_id Role#grant_scope_id}
  */
  readonly grantScopeId?: string;
  /**
  *  A list of stringified grants for the role.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/role#grant_strings Role#grant_strings}
  */
  readonly grantStrings?: string[];
  /**
  * The role name. Defaults to the resource name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/role#name Role#name}
  */
  readonly name?: string;
  /**
  * A list of principal (user or group) IDs to add as principals on the role.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/role#principal_ids Role#principal_ids}
  */
  readonly principalIds?: string[];
  /**
  * The scope ID in which the resource is created. Defaults to the provider's `default_scope` if unset.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/role#scope_id Role#scope_id}
  */
  readonly scopeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/role boundary_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/role boundary_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_role',
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
    this._description = config.description;
    this._grantScopeId = config.grantScopeId;
    this._grantStrings = config.grantStrings;
    this._name = config.name;
    this._principalIds = config.principalIds;
    this._scopeId = config.scopeId;
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

  // grant_scope_id - computed: true, optional: true, required: false
  private _grantScopeId?: string; 
  public get grantScopeId() {
    return this.getStringAttribute('grant_scope_id');
  }
  public set grantScopeId(value: string) {
    this._grantScopeId = value;
  }
  public resetGrantScopeId() {
    this._grantScopeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantScopeIdInput() {
    return this._grantScopeId;
  }

  // grant_strings - computed: false, optional: true, required: false
  private _grantStrings?: string[]; 
  public get grantStrings() {
    return cdktf.Fn.tolist(this.getListAttribute('grant_strings'));
  }
  public set grantStrings(value: string[]) {
    this._grantStrings = value;
  }
  public resetGrantStrings() {
    this._grantStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantStringsInput() {
    return this._grantStrings;
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

  // principal_ids - computed: false, optional: true, required: false
  private _principalIds?: string[]; 
  public get principalIds() {
    return cdktf.Fn.tolist(this.getListAttribute('principal_ids'));
  }
  public set principalIds(value: string[]) {
    this._principalIds = value;
  }
  public resetPrincipalIds() {
    this._principalIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdsInput() {
    return this._principalIds;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      grant_scope_id: cdktf.stringToTerraform(this._grantScopeId),
      grant_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._grantStrings),
      name: cdktf.stringToTerraform(this._name),
      principal_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._principalIds),
      scope_id: cdktf.stringToTerraform(this._scopeId),
    };
  }
}
